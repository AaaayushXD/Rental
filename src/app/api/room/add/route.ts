import { Room } from "@/@types/Room";
import { dbConnect } from "@/db/dbConnect";
import { ApiResponse } from "@/helpers/ApiResponse";
import RoomModel from "@/models/Room";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { floor, roomNo, isBooked, size, image }: Room = await req.json();
    const newRoom = new RoomModel({
      floor,
      image,
      roomNo,
      isBooked,
      size,
    });
    await newRoom.save();
    return Response.json(
      new ApiResponse(201, newRoom, "New room data inserted succesfully", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string[],
        "Error adding new room detail.",
        false
      )
    );
  }
}
