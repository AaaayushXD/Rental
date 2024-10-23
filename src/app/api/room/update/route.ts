import { Room } from "@/@types/Room";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import RoomModel from "@/models/Room";
interface RoomDetail extends Room {
  roomId: string;
}

export async function PUT(req: Request) {
  await dbConnect();
  try {
    const {
      roomId,
      floorNo,
      isBooked,
      rentId,
      roomNo,
      size,
      tenantId,
    }: RoomDetail = await req.json();

    const updatedFields: Partial<RoomDetail> = {};

    if (floorNo !== undefined) updatedFields.floorNo = floorNo;
    if (isBooked !== undefined) updatedFields.isBooked = isBooked;
    if (rentId !== undefined) updatedFields.rentId = rentId;
    if (roomNo !== undefined) updatedFields.roomNo = roomNo;
    if (size !== undefined) updatedFields.size = size;
    if (tenantId !== undefined) updatedFields.tenantId = tenantId;

    const room = await RoomModel.findByIdAndUpdate(roomId, updatedFields, {
      new: true,
    });

    return Response.json(
      new ApiResponse(
        201,
        { data: room },
        "Room detail updated successfully",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Error updating room detail.",
        null,
        error as string[],
        undefined,
        false
      )
    );
  }
}
