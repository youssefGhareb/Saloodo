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