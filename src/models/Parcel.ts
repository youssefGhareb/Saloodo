import { parcels } from "../data";

export type Parcel = {
  id: string | number;
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

  pickup(id: number, bikerID: number): Parcel | null {
    const index = parcels.findIndex((parcel) => {
      return parcel.id == id;
    });
    if (index != -1 && parcels[index].pickedUp === false) {
      parcels[index].pickedUp = true;
      parcels[index].bikerID = bikerID;
      parcels[index].status = "Picked up";
      return parcels[index];
    }
    return null;
  }

  confrimPickup(parcelID: number, timeStamp: number): Parcel | null {
    const index = parcels.findIndex((parcel) => {
      return parcel.id == parcelID;
    });
    if (index != -1) {
      parcels[index].pickUpTimeStamp = timeStamp;
      parcels[index].status = "Pick up time Confirmed";
      return parcels[index];
    } else {
      return null;
    }
  }

  confrimDelivery(parcelID: number, timeStamp: number): Parcel | null {
    const index = parcels.findIndex((parcel) => {
      return parcel.id == parcelID;
    });
    if (index != -1) {
      parcels[index].dropOffTimeStamp = timeStamp;
      parcels[index].status = "Delivered";
      return parcels[index];
    } else {
      return null;
    }
  }
}
