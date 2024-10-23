import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RoomModel from "@/models/Room";

export async function GET() {
  await dbConnect();
  try {
    const rooms = await RoomModel.find();
    return Response.json(
      new ApiResponse(
        200,
        { data: rooms },
        "Rooms details fetched successfully.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error getting rooms detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
