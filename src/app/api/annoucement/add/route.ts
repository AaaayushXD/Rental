import { Annoucements } from "@/@types/Cards";
import { dbConnect } from "@/db/dbConnect";
import { ApiResponse } from "@/helpers/ApiResponse";
import AnnoucementModel from "@/models/Annoucement";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { title, description, dateAndTime }: Annoucements = await req.json();
    console.log({ title, description, dateAndTime });
    const newAnnoucement = new AnnoucementModel({
      title,
      description,
      dateAndTime,
    });
    await newAnnoucement.save();
    return Response.json(
      new ApiResponse(
        201,
        newAnnoucement,
        "Annoucement added successfully.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string[],
        "Error adding new annoucement.",
        false
      )
    );
  }
}
