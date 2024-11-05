import { Annoucements } from "@/@types/Cards";
import mongoose, { Schema } from "mongoose";

const AnnoucementSchema = new Schema<Annoucements>({
  title: {
    type: String,
    required: [true, "Annoucement title need to be specified."],
  },
  description: {
    type: String,
    required: [true, "Annoucement description need to be specified."],
  },
  dateAndTime: {
    type: String,
  },
});

const AnnoucementModel =
  (mongoose.models.Annoucement as mongoose.Model<Annoucements>) ||
  mongoose.model<Annoucements>("Annoucement", AnnoucementSchema);

export default AnnoucementModel;
