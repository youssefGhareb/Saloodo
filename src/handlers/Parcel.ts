import express, { Request, Response } from "express";
import { Parcel, ParcelStore } from "../models/Parcel";
import uniqid from "uniqid";

const store = new ParcelStore();

const index = (_req: Request, res: Response) => {
  const senders = store.index();
  if (senders) {
    res.statusCode = 200;
    res.json(senders);
  } else {
    res.status(500);
  }
};

const show = (_req: Request, res: Response) => {
  const id: number = _req.params.id as unknown as number;

  const sender = store.show(id);
  if (sender) {
    res.statusCode = 200;
    res.json(sender);
  } else {
    res.status(404);
    res.send("Sender not found");
  }
};

const create = (_req:Request, res:Response) => {
    const parcel: Parcel = {
        id: uniqid(),
        pickUp: _req.body.pickUp,
        dropOff: _req.body.dropOff,
        pickUpTimeStamp: undefined,
        dropOffTimeStamp: undefined,
        bikerID: undefined,
        pickedUp: false,
        senderID: _req.body.senderID,
        status: "Processing"
    }

    store.create(parcel);
    res.statusCode = 200;
    res.json(parcel)
}

const pickUp = (_req:Request, res:Response) => {
    const updatedParcel = store.pickup(_req.body.parcelID,_req.body.bikerID);
    if(updatedParcel){
        res.statusCode = 200;
        res.json(updatedParcel);
    }
}

const confirmPickup = (_req:Request, res:Response) => {
    const result = store.confrimPickup(_req.body.parcelID, _req.body.timeStamp);
    if(result != null){
        res.statusCode = 200;
        res.json(result)
    } else {
        res.statusCode = 404;
        res.send("Not found");
    }
}

const confrimDelivery = (_req:Request, res:Response) => {
    const result = store.confrimDelivery(_req.body.parcelID, _req.body.timeStamp);
    if (result != null) {
      res.statusCode = 200;
      res.json(result);
    } else {
      res.statusCode = 404;
      res.send("Not found");
    }
}

const parclesRoutes = (app: express.Application) => {
  app.get("/parcels", index);
  app.get("/parcels/:id", show);
  app.post("/parcels", create);
  app.put("/parcels/pickup", pickUp);
  app.put("/parcels/confirmPickup", confirmPickup);
  app.put("/parcels/confirmDelivery", confrimDelivery);
};

export default parclesRoutes;
