import { Payment } from "@/@types/Payment";
import mongoose, { Schema } from "mongoose";

const PaymentSchema = new Schema<Payment>({
  uid: {
    type: String,
    required: [true, "User id is required."],
  },
  amount: {
    type: Number,
    required: [true, "Amount need to be specified."],
  },
  date: {
    type: String,
  },
  reason: {
    type: String,
    default: "Rent Payment",
  },
});
const PaymentModel =
  (mongoose.models.Payment as mongoose.Model<Payment>) ||
  mongoose.model<Payment>("Payment", PaymentSchema);

export default PaymentModel;
