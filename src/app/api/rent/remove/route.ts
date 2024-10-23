import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RentModel from "@/models/Rent";

export async function DELETE(req: Request) {
  await dbConnect();
  try {
    const { id } = await req.json();
    const rent = await RentModel.findByIdAndDelete(id);
    return Response.json(
      new ApiResponse(
        200,
        { data: rent },
        "Rent detail successfully deleted.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error deleting rent detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
