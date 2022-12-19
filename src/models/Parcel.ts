import { parcels } from "../data";

export type Parcel = {
  id: number;
  pickUp: string;
  dropOff: string;
  pickUpTimeStamp: number | undefined;
  dropOffTimeStamp: number | undefined;
  status: string;
  pickedUp: boolean;
  bikerID: number | undefined;
  senderID: number;
};

export class ParcelStore {
  index(): Parcel[] {
    return parcels;
  }

  show(id: number): Parcel | undefined {
    return parcels.find((parcel) => {
      parcel.id == id;
    });
  }

  create(parcel: Parcel): void {
    parcels.push(parcel);
  }

  pickup(id: number, bikerID): Parcel | null {
    const index = parcels.findIndex(parcel => parcel.id === id);
    if(index != -1 && parcels[index].pickedUp === false){
        parcels[index].pickedUp = true;
        parcels[index].bikerID = bikerID;
        parcels[index].status = "Picked up";
        return parcels[index];
    }
    return null;
  }
}
