import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RoomModel from "@/models/Room";

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const room = await RoomModel.find({
      floor: params.id,
    });
    if (!room) {
      throw new ApiError(404, "Room not found.");
    }

    room.forEach(async (data) => {
      await data.deleteOne();
    });
    return Response.json(
      new ApiResponse(200, room, "Room detail succesfully removed.", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string[],
        "Error removing room detail.",
        false
      )
    );
  }
}
