import { Biker } from "./models/Biker";
import { Parcel } from "./models/Parcel";
import { Sender } from "./models/Sender";

export let senders: Sender[] = [
  {
    id: 1,
    name: "John Williams",
    orders: []
  },
  {
    id: 2,
    name: "David Golliath",
    orders: []
  },
  {
    id: 3,
    name: "Mark Walberg",
    orders: []
  },
  {
    id: 4,
    name: "Ahmad Youssef",
    orders: []
  },
  {
    id: 5,
    name: "Mike Jackson",
    orders: []
  }
];

export let bikers: Biker[] = [
  {
    id: 1,
    name: "Kalevi Gottlob",
    orders: []
  },
  {
    id: 2,
    name: "Oddr Martin",
    orders: []
  },
  {
    id: 3,
    name: "Reinhold Chandler",
    orders: []
  },
  {
    id: 4,
    name: "Teo Aoi",
    orders: []
  },
  {
    id: 5,
    name: "Sokratis Dòmhnall",
    orders: []
  },
  {
    id: 6,
    name: "Kalevi Gottlob",
    orders: []
  },
  {
    id: 7,
    name: "Aivar Kali",
    orders: []
  },
  {
    id: 8,
    name: "Damianus Ahab",
    orders: []
  },
  {
    id: 9,
    name: "Óskar Airmanagild",
    orders: []
  },
  {
    id: 10,
    name: "Vijay Pierpaolo",
    orders: []
  }
];

export let parcels: Parcel[] = [
  {
    id: 1,
    bikerID: undefined,
    pickUp: "7 london avenue, london",
    dropOff: "14th of mike road, Blueberyy",
    pickedUp: false,
    dropOffTimeStamp: undefined,
    pickUpTimeStamp: undefined,
    senderID: 1,
    status: "Processing"
  }
];
