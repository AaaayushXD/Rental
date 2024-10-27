import { z } from "zod";

export const floorSchema = z.object({
  title: z
    .string()
    .min(3, "Title need to be more than 3 character.")
    .max(50, "Title can't be more than 50 character long"),
  image: z.any(),
});
