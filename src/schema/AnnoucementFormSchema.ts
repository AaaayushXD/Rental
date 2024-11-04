import { z } from "zod";

export const addAnnoucementSchema = z.object({
  title: z
    .string()
    .min(3, "Title need to be longer than 3 characters.")
    .max(50, "Title cant be longer than 50 characters."),
  description: z
    .string()
    .min(10, "Description need to be longer than 10 characeters.")
    .max(300, "Description cannot be longer than 300 characters."),
});
