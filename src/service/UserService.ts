import axios from "axios";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";

export const getUsersDetailService = async () => {
  try {
    const response = await axios.get<ApiResponse>(`/api/user/get/`);
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong while getting user detail.");
    }
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
    if (Boolean(response.data.success) === false) {
      throw new Error(
        "Something went wrong while getting user based on role ."
      );
    }
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
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong getting user.");
    }
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
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong getting user.");
    }
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
