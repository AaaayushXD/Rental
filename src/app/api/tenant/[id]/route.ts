import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import TenantModel from "@/models/Tenant";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  await dbConnect();
  try {
    const tenant = await TenantModel.findOne({
      roomId: params.id,
    });
    if (!tenant) {
      throw new ApiError(404, "No tenant detail found.");
    }
    return Response.json(
      new ApiResponse(200, tenant, "Tenant detail successfully fetched.", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string[],
        "Error getting tenant detail.",
        false
      )
    );
  }
}
