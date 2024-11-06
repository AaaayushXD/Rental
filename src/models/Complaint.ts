import { Tickets } from "@/@types/Cards";
import mongoose, { Schema } from "mongoose";

const compliantSchema = new Schema<Tickets>({
  title: {
    type: String,
    required: [true, "Title need to be specified."],
  },
  description: {
    type: String,
    required: [true, "Description need to be specified."],
  },
  time: {
    type: String,
  },
  severity: {
    type: String,
  },
  username: {
    type: String,
  },
});
const ComplaintModel =
  (mongoose.models.Ticket as mongoose.Model<Tickets>) ||
  mongoose.model<Tickets>("Ticket", compliantSchema);
export default ComplaintModel;
