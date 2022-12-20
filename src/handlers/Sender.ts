import express, { Request, Response } from "express";
import { SenderStore } from "../models/Sender";

const store = new SenderStore();

const index = (_req: Request, res:Response) => {
    const senders = store.index();
    if(senders){
        res.statusCode = 200;
        res.json(senders);
    } else {
        res.status(500)
    }
}

const show = (_req: Request, res:Response) => {
    const id: number = (_req.params.id as unknown) as number;
    
    const sender = store.show(id)
    if(sender){
        res.statusCode = 200;
        res.json(sender)
    } else {
        res.status(404);
        res.send('Sender not found')
    }
}

const senderRoutes = (app:express.Application) => {
    app.get('/senders', index);
    app.get('/senders/:id', show)
}

export default senderRoutes;