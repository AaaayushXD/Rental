export interface Room {
  roomNo: number;
  floor: string;
  size: RoomSize;
  isBooked: boolean;
  image: string;
}

export interface RoomSize {
  width: number;
  height: number;
}

export interface RoomData extends Room {
  _id: string;
}