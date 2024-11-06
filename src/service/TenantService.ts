import axios from "axios";
import { Tenant } from "@/@types/Tenant";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";

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
    throw new ApiError(
      400,
      "Error assigning tenant to a room.",
      null,
      error as string[]
    );
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
    throw new ApiError(
      400,
      "Error getting tenant information.",
      null,
      error as string[]
    );
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
    throw new ApiError(
      400,
      "Error getting tenant information based on user id.",
      null,
      error as string[]
    );
  }
};
