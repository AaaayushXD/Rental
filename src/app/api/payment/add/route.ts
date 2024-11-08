import { dbConnect } from "@/db/dbConnect";
import { ApiResponse } from "@/helpers/ApiResponse";
import PaymentModel from "@/models/Payment";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { uid, date, amount, reason } = await req.json();

    const newPayment = new PaymentModel({
      uid,
      date,
      amount,
      reason: reason ? reason : "Montly rent paid.",
    });
    await newPayment.save();
    return Response.json(
      new ApiResponse(201, newPayment, "Payment info added.", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string[],
        "Error adding payment information.",
        false
      )
    );
  }
}
