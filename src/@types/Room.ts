export interface Room {
  roomNo: number;
  floor: string;
  size: RoomSize;
  rentId: string;
  isBooked: boolean;
  tenantId?: string;
}

export interface RoomSize {
  width: number;
  height: number;
}
