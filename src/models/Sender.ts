import { senders } from "../data";
import { Parcel } from "./Parcel"

export type Sender = {
    id: number,
    name: string,
    orders: Parcel[] | undefined;
}

export class SenderStore {
  index(): Sender[] {
    return senders;
  }

  show(id: number): Sender | undefined {
    return senders.find((sender) => {
      sender.id == id;
    });
  }
  
}