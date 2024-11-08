import { PaymentDetail } from "./Payment";

export interface RecentPaymentProps {
  payments: PaymentDetail;
}
export interface RecentPayments {
  avatar: string;
  name: string;
  phone: string;
  date: string;
  amount: number;
}

export interface TicketCardProps {
  tickets: Tickets;
}

export interface Tickets {
  title: string;
  severity: string;
  description: string;
  time: string;
  username?: string;
}

export interface TicketDetail extends Tickets {
  _id: string;
}

export interface AnnoucementCardProps {
  cards: Annoucements;
}

export interface Annoucements {
  title: string;
  description: string;
  dateAndTime: string;
}

export interface AnnoucementDetail extends Annoucements {
  _id: string;
}
