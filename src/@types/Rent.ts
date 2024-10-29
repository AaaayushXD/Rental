export interface Rent {
  roomId: string;
  price: number;
  electricity: number;
  water: number;
}

export interface RentDetail extends Rent {
  _id: string;
}
