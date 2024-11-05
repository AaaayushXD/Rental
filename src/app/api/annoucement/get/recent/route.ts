import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import AnnoucementModel from "@/models/Annoucement";

export async function GET() {
  try {
    await dbConnect();
    const annoucements = await AnnoucementModel.find()
      .sort({
        dateAndTime: "desc",
      })
      .limit(10);
    if (!annoucements) throw new ApiError(404, "No annoucements found.");
    return Response.json(
      new ApiResponse(
        200,
        annoucements,
        "Recent annoucements fetcshed successfully.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string[],
        "Failed to fetch recent annoucements.",
        false
      )
    );
  }
}
