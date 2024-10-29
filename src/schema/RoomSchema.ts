import { z } from "zod";

export const roomSchema = z.object({
  roomNo: z.string(),
  size: z.object({
    width: z.string(),
    height: z.string(),
  }),
  isBooked: z.boolean(),
  image: z.any(),
  amount: z.string(),
  electricity: z.string(),
  water: z.string(),
});
