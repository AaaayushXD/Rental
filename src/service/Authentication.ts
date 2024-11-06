import axios from "axios";
import { SignUpProps } from "@/@types/Authentication";
import { ApiResponse } from "@/helpers/ApiResponse";
import { ApiError } from "@/helpers/ApiError";

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
    throw new ApiError(400, "Sign up service failed.", null, error as string[]);
  }
};
