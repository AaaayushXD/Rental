export interface User {
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  role: Role;
  totalPeople?: number;
  married?: boolean;
  children?: number;
  refreshToken?: string;
  joined: string;
}
export type Role = "admin" | "tenant";

export interface UserDetail extends User {
  _id: string;
}

export interface TenantRent {
  uid: string;
  roomId: string;
  rent: number;
}
