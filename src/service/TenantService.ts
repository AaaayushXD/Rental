import { Tenant } from "@/@types/Tenant";
import { ApiResponse } from "@/helpers/ApiResponse";
import axios, { AxiosError } from "axios";

export const assignTenantService = async (data: Tenant) => {
  try {
    const response = await axios.post<ApiResponse>(`/api/tenant/add`, {
      isBooked: true,
      role: "tenant",
      roomId: data.roomId,
      uid: data.uid,
    });
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong getting user.");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};

export const getTenantInfoService = async (roomId: string) => {
  try {
    const response = await axios.get<ApiResponse>(`/api/tenant/${roomId}`);
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong getting user.");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};

export const getTenantInfoBasedOnUidService = async (uid: string) => {
  try {
    const response = await axios.get<ApiResponse>(`/api/tenant/get/${uid}`);
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong getting user.");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};
