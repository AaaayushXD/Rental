import { User } from "@/@types/User";
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema<User>({
  firstName: {
    type: String,
    required: [true, "First Name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required"],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, "Phone is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: ["admin", "tenant"],
    default: "tenant",
  },
  totalPeople: {
    type: Number,
    default: 1,
  },
  married: {
    type: Boolean,
    default: false,
  },
  children: {
    type: Number,
    default: 0,
  },
  refreshToken: {
    type: String,
    default: "",
  },
  joined: {
    type: String,
    default: new Date().toISOString(),
  },
});

const UserModel =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>("User", UserSchema);

export default UserModel;
