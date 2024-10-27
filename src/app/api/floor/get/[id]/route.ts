import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import FloorModel from "@/models/Floor";

export async function GET({ params }: { params: { id: string } }) {
  await dbConnect();
  try {
    const floor = await FloorModel.findById(params.id);
    return Response.json(
      new ApiResponse(
        200,
        { data: floor },
        "Floor detail fetched successfully.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error getting floor detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
