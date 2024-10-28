import { Floor } from "@/@types/Floor";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import FloorModel from "@/models/Floor";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { image, title }: Floor = await req.json();
    const newFloor = new FloorModel({
      title,
      image,
    });
    await newFloor.save();
    return Response.json(
      new ApiResponse(201, newFloor, "New Floor inserted succesfully", true)
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error adding new floor detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
