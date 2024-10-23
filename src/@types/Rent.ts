export interface Rent {
  roomId: string;
  price: number;
  electricity: number;
  water: number;
  misc: ExtraRent | ExtraRent[];
}

interface ExtraRent {
  amount: number;
  reason: string;
}
