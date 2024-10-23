import { Room } from "@/@types/Room";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RoomModel from "@/models/Room";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { floorNo, roomNo, isBooked, rentId, size, tenantId }: Room =
      await req.json();
    const newRoom = new RoomModel({
      floorNo,
      roomNo,
      isBooked,
      rentId,
      size,
      tenantId,
    });
    await newRoom.save();
    return Response.json(
      new ApiResponse(
        201,
        { data: newRoom },
        "New room data inserted succesfully",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error adding new room detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
