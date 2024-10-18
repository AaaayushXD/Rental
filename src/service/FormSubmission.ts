"use client";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/helpers/ApiResponse";
import { ContactForm } from "@/@types/ContactForm";

export const contactFormService = async (data: ContactForm) => {
  try {
    const response = await axios.post<ApiResponse>(
      `${process.env.NEXT_PUBLIC_FORM_API}`,
      { data },
      { headers: { Accept: "application/json" } }
    );
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};
