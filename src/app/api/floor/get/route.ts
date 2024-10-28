import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import FloorModel from "@/models/Floor";

export async function GET() {
  await dbConnect();
  try {
    const floor = await FloorModel.find();
    return Response.json(
      new ApiResponse(200, floor, "Floor details fetched successfully.", true)
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
