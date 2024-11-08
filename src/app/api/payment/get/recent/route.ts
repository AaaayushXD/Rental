import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import PaymentModel from "@/models/Payment";

export async function GET() {
  try {
    await dbConnect();
    const payments = await PaymentModel.find()
      .sort({
        date: "desc",
      })
      .limit(10);
    if (!payments) throw new ApiError(404, "No payments found.");
    return Response.json(
      new ApiResponse(200, payments, "Fetched montly payments. ", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string[],
        "Error getting payment history of the month.",
        false
      )
    );
  }
}
