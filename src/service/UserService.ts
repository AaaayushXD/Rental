import axios from "axios";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";

export const getUsersDetailService = async () => {
  try {
    const response = await axios.get<ApiResponse>(`/api/user/get/`);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error getting user detail.",
      null,
      error as string[]
    );
  }
};

export const getUserBasedOnRoleService = async (role: string) => {
  try {
    const response = await axios.get<ApiResponse>(`/api/user/${role}`);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error getting user based on role.",
      null,
      error as string[]
    );
  }
};

export const getUserOnIdService = async (id: string) => {
  try {
    const response = await axios.get<ApiResponse>(`/api/user/get/${id}`);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error getting user based on their id.",
      null,
      error as string[]
    );
  }
};

export const getUSerBasedOnPhoneService = async (phone: string) => {
  try {
    const response = await axios.get<ApiResponse>(
      `/api/user/get/phone/${phone}`
    );
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error getting user based on phone.",
      null,
      error as string[]
    );
  }
};
