import { z } from "zod";

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be atleast 2 character long."),
    lastName: z.string().min(2, "Last name must be atleast 2 character long."),
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
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be atleast 8 character long." })
      .regex(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain an uppercase character, a digit and a special symbol."
      ),
    totalPeople: z.string(),
    married: z.string(),
    children: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match.",
    path: ["confirmPassword"],
  });
