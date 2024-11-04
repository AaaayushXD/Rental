export interface RecentPaymentProps {
  payments: RecentPayments;
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
export interface AnnoucementCardProps {
  cards: Annoucements;
}

export interface Annoucements {
  title: string;
  description: string;
  dateAndTime: string;
}
