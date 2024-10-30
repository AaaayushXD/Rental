export interface Tenant {
  uid: string;
  roomId: string;
  role: "tenant";
  isBooked: boolean;
}

export interface TenantDetail extends Tenant {
  _id: string;
}
