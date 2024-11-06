import { ApiResponse } from "@/helpers/ApiResponse";
import ComplaintModel from "@/models/Complaint";

export async function GET() {
  try {
    const tickets = await ComplaintModel.find()
      .sort({
        time: "desc",
      })
      .limit(10);
    return Response.json(
      new ApiResponse(200, tickets, "Error fetching recent tickets.", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(
        500,
        error as string[],
        "Error fetching recent tickets",
        false
      )
    );
  }
}
