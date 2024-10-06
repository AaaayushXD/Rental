import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

export async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log(" Already Connected to MongoDB");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.DB_URI || "", {
      dbName: "rental",
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("DB connected succesfully.");
  } catch (error) {
    console.error(error);
    console.log("Database connection failed");
    process.exit(1);
  }
}
