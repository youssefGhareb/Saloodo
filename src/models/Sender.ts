import { senders } from "../data";
import { Parcel } from "./Parcel"

export type Sender = {
    id: number,
    name: string,
    orders: Parcel[] | undefined;
}

