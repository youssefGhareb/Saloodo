import { senders } from "../data";
import { Parcel } from "./Parcel";

export type Sender = {
  id: number;
  name: string;
  orders: Parcel[] | undefined;
};

export class SenderStore {
  index(): Sender[] {
    return senders;
  }

  show(id: number): Sender | undefined {
    const result: Sender | undefined = senders.find((sender) => {
      return id == sender.id;
    });

    return result;
  }
}
