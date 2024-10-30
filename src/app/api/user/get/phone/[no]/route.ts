import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import UserModel from "@/models/User";

export async function GET(_: Request, { params }: { params: { no: string } }) {
  await dbConnect();
  try {
    const tenant = await UserModel.findOne({
      phone: params.no,
    });
    if (!tenant) {
      throw new ApiError(404, "User not found");
    }
    return Response.json(
      new ApiResponse(200, tenant, "User detail found.", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string,
        "Error getting user based on phone number.",
        false
      )
    );
  }
}