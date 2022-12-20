import { bikers } from "../data";
import { Parcel } from "./Parcel"

export type Biker = {
    id: number,
    name: string,
    orders: Parcel[]
}

export class BikerStore {
  index(): Biker[] {
    return bikers;
  }

  show(id: number): Biker | undefined {
    return bikers.find((biker) => {
      return biker.id == id;
    });
  }
}