import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RoomModel from "@/models/Room";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  try {
    const room = await RoomModel.findById(params.id);
    if (!room) throw new ApiError(404, "Room not found");
    return Response.json(
      new ApiResponse(200, room, "Room detail fetched successfully.", true)
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error getting room detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
