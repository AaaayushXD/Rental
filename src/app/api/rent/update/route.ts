import { Rent } from "@/@types/Rent";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RentModel from "@/models/Rent";

export async function PUT(req: Request) {
  await dbConnect();
  try {
    const { electricity, price, roomId, water }: Rent = await req.json();

    const updatedFields: Partial<Rent> = {};

    if (electricity !== undefined) updatedFields.electricity = electricity;
    if (water !== undefined) updatedFields.water = water;
    if (price !== undefined) updatedFields.price = price;

    const rent = await RentModel.findOneAndUpdate(
      {
        roomId,
      },
      updatedFields,
      {
        new: true,
      }
    );

    return Response.json(
      new ApiResponse(
        201,
        rent ? rent : [],
        "Rent detail updated successfully",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error updating rent detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
