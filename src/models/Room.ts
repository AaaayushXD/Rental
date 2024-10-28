import { Room } from "@/@types/Room";
import mongoose, { Schema } from "mongoose";

const RoomSchema = new Schema<Room>({
  floor: {
    type: String,
    required: [true, "Floor title need to be specified."],
  },
  roomNo: {
    type: Number,
    required: [true, "Room number required."],
  },
  size: {
    type: Object,
    required: [true, "Height and weight of the room needs to be defined."],
  },
  isBooked: {
    type: Boolean,
    default: false,
  },
  rentId: {
    type: String,
    required: [true, "Rent detail ID of room is required."],
  },
  tenantId: {
    type: String,
  },
});

const RoomModel =
  (mongoose.models.Room as mongoose.Model<Room>) ||
  mongoose.model<Room>("Room", RoomSchema);

export default RoomModel;
