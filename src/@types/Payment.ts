export interface Payment {
  uid: string;
  date: string;
  amount: number;
  reason?: string;
}

export interface PaymentDetail extends Payment {
  _id: string;
}
