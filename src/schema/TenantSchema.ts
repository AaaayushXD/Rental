import { z } from "zod";

export const TenantSchema = z.object({
  phoneNumber: z.string().length(10, "Invalid phone numer."),
});
