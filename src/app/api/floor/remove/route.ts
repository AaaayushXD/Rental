import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import FloorModel from "@/models/Floor";

export async function DELETE(req: Request) {
  await dbConnect();
  try {
    const { floorId } = await req.json();
    const floor = await FloorModel.findById(floorId);
    if (!floor) {
      throw new ApiError(
        404,
        "Floor not found.",
        null,
        undefined,
        undefined,
        false
      );
    }
    await floor?.deleteOne();
    return Response.json(
      new ApiResponse(
        200,
        { data: floor },
        "Floor detail succesfully removed.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error removing floor detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
