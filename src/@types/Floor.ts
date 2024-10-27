import { ObjectId } from "mongoose";

export interface Floor {
  title: string;
  image: string;
}
export interface FloorDetail extends Floor {
  _id: ObjectId;
}
