import axios, { AxiosError } from "axios";
import { SignUpProps } from "@/@types/Authentication";
import { ApiResponse } from "@/helpers/ApiResponse";

export const signUpService = async (
  data: SignUpProps,
  role: "tenant" | "admin"
) => {
  try {
    const response = await axios.post<ApiResponse>("/api/sign-up", {
      ...data,
      role,
    });
    return response;
  } catch (error) {
    console.error(error);
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};
