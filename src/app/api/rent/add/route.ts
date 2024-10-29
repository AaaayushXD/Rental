import { Rent } from "@/@types/Rent";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RentModel from "@/models/Rent";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { roomId, price, water, electricity }: Rent = await req.json();
    const rentDetail = new RentModel({
      roomId,
      price,
      water,
      electricity,
    });
    await rentDetail.save();
    return Response.json(
      new ApiResponse(201, rentDetail, "Rent detail added successfully.", true)
    );
  } catch (error) {
    return new ApiError(
      500,
      "Error adding rent detail.",
      null,
      error as string[],
      undefined,
      false
    );
  }
}
