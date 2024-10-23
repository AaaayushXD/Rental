export interface Room {
  roomNo: number;
  floorNo: number;
  size: RoomSize;
  rentId: string;
  isBooked: boolean;
  tenantId?: string;
}

export interface RoomSize {
  width: number;
  height: number;
}
