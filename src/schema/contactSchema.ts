import { z } from "zod";

export const contactSchema = z.object({
  phone: z
    .string()
    .length(10, "Phone number must be 10 digit long.")
    .regex(/^\d{10}$/, "Phone number must contain only digits."),
  message: z
    .string()
    .max(300, { message: "Message cannot be longer than 300 characters." }),
});
