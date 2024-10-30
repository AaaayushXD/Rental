import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import UserModel from "@/models/User";

export async function GET(req: Request) {
  await dbConnect();
  try {
    const { role } = await req.json();
    const user = await UserModel.find({
      role: role,
    });
    if (!user) {
      throw new ApiError(404, "No users found on that role.");
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
