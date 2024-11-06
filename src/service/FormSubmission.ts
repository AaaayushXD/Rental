"use client";
import axios from "axios";
import { ApiResponse } from "@/helpers/ApiResponse";
import { ContactForm } from "@/@types/ContactForm";
import { ApiError } from "@/helpers/ApiError";

export const contactFormService = async (data: ContactForm) => {
  try {
    const response = await axios.post<ApiResponse>(
      `${process.env.NEXT_PUBLIC_FORM_API}`,
      { data },
      { headers: { Accept: "application/json" } }
    );
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error adding contact information.",
      null,
      error as string[]
    );
  }
};
