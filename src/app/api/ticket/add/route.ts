import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import ComplaintModel from "@/models/Complaint";

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { title, description, severity, time, username } = await req.json();

    const newTicket = new ComplaintModel({
      title,
      description,
      severity,
      time,
      username: username ? username : " ",
    });
    if (!newTicket)
      throw new ApiError(500, "Something went wrong while adding new ticket.");
    await newTicket.save();
    return Response.json(
      new ApiResponse(201, newTicket, "Ticket added successfully.", true)
    );
  } catch (error) {
    return Response.json(
      new ApiResponse(500, error as string[], "Error adding new ticket.", false)
    );
  }
}
