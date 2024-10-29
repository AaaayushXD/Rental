import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RentModel from "@/models/Rent";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  try {
    const rentOfARoom = await RentModel.findOne({
      roomId: params.id,
    });
    return Response.json(
      new ApiResponse(
        200,
        rentOfARoom ? rentOfARoom : [],
        "Rent detail of a room successfully fetched.",
        true
      )
    );
  } catch (error) {
    throw new ApiError(
      500,
      "Error getting rent detail.",
      null,
      error as string[],
      undefined,
      false
    );
  }
}
