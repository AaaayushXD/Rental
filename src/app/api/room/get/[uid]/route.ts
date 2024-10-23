import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RoomModel from "@/models/Room";

export async function GET({ params }: { params: { uid: string } }) {
  await dbConnect();
  try {
    const room = await RoomModel.find({
      tenantId: params.uid,
    });
    return Response.json(
      new ApiResponse(
        200,
        { data: room },
        "Room detail fetched successfully.",
        true
      )
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
