import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import UserModel from "@/models/User";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  try {
    const user = await UserModel.findOne({
      _id: params.id,
    });
    if (!user) {
      throw new ApiError(404, "No user found.");
    }
    return Response.json(
      new ApiResponse(200, user, "Users details fetched successfully.", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string[],
        "Error getting user detail.",
        false
      )
    );
  }
}
