import { ApiResponse } from "@/helpers/ApiResponse";
import axios, { AxiosError } from "axios";

export const getUsersDetailService = async () => {
  try {
    const response = await axios.get<ApiResponse>(`/api/user/get/`);
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong while getting user detail.");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
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
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
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
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
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
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};
