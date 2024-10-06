import { z } from "zod";

export const signInSchema = z.object({
  phone: z
    .string()
    .length(10, "Phone number must be 10 digit long.")
    .regex(/^\d{10}$/, "Phone number must contain only digits."),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 character long." })
    .regex(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain an uppercase character, a digit and a special symbol."
    ),
});
