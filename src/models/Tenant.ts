import { Tenant } from "@/@types/Tenant";
import mongoose, { Schema } from "mongoose";

const TenantSchema = new Schema<Tenant>({
  role: {
    type: String,
    default: "tenant",
  },
  isBooked: {
    type: Boolean,
    default: true,
  },
  uid: {
    type: String,
    required: [true, "User id required."],
  },
  roomId: {
    type: String,
    required: [true, "Room id is required."],
  },
});

const TenantModel =
  (mongoose.models.Tenant as mongoose.Model<Tenant>) ||
  mongoose.model<Tenant>("Tenant", TenantSchema);

export default TenantModel;
