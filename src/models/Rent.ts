import { Rent } from "@/@types/Rent";
import mongoose, { Schema } from "mongoose";

const RentSchema = new Schema<Rent>({
  roomId: {
    type: String,
    required: [true, "Room id is required to specify its rent detail."],
  },
  electricity: {
    type: Number,
  },
  water: {
    type: Number,
  },
  price: {
    type: Number,
    required: [true, "Provide rent amount."],
  },
  misc: {
    type: Object,
  },
});

const RentModel =
  (mongoose.models.Room as mongoose.Model<Rent>) ||
  mongoose.model<Rent>("Rent", RentSchema);

export default RentModel;
