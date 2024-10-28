import { Floor } from "@/@types/Floor";
import mongoose, { Schema } from "mongoose";

const FloorSchema = new Schema<Floor>({
  title: {
    type: String,
    required: [true, "Floor number need to be specified."],
  },
  image: {
    type: String,
    required: [true, "Image need to be specified."],
  },
});

const FloorModel =
  (mongoose.models.Floor as mongoose.Model<Floor>) ||
  mongoose.model<Floor>("Floor", FloorSchema);

export default FloorModel;
