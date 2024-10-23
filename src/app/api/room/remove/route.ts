import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RoomModel from "@/models/Room";

export async function DELETE(req: Request) {
  await dbConnect();
  try {
    const { roomId } = await req.json();
    const room = await RoomModel.findById(roomId);
    if (!room) {
      throw new ApiError(
        404,
        "Room not found.",
        null,
        undefined,
        undefined,
        false
      );
    }
    await room?.deleteOne();
    return Response.json(
      new ApiResponse(
        200,
        { data: room },
        "Room detail succesfully removed.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error removing room detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
