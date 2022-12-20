import express, { Request, Response } from "express";
import { BikerStore } from "../models/Biker";

const store = new BikerStore();

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
  console.log(id);
  

  const sender = store.show(id);
  if (sender) {
    res.statusCode = 200;
    res.json(sender);
  } else {
    res.status(404);
    res.send("Biker not found");
  }
};

const bikerRoutes = (app: express.Application) => {
  app.get("/bikers", index);
  app.get("/bikers/:id", show);
};

export default bikerRoutes;
