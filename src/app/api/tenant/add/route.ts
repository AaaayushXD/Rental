import { Tenant } from "@/@types/Tenant";
import { dbConnect } from "@/db/dbConnect";
import { ApiResponse } from "@/helpers/ApiResponse";
import TenantModel from "@/models/Tenant";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { uid, roomId }: Tenant = await req.json();
    const tenant = new TenantModel({
      role: "tenant",
      isBooked: true,
      uid,
      roomId,
    });
    await tenant.save();
    return Response.json(
      new ApiResponse(
        201,
        tenant,
        "Tenant is assigned succesfully to a room",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string[],
        "Error assigning a tenant.",
        false
      )
    );
  }
}
