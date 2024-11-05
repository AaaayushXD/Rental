import { RecentPayments } from "@/@types/Cards";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import axios from "axios";

export const getRecentPayments = async () => {
  try {
    const response = await axios.get<ApiResponse>(`/api/payment/get/recent`);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error fetching recent payments.",
      null,
      error as string[]
    );
  }
};
export const getAllPayments = async () => {
  try {
    const response = await axios.get<ApiResponse>(`/api/payment/get`);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error fetching payments.",
      null,
      error as string[]
    );
  }
};
export const addNewPayment = async (data: RecentPayments) => {
  try {
    const response = await axios.post<ApiResponse>(`/api/payment/add`, {
      ...data,
    });
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error adding new payment.",
      null,
      error as string[]
    );
  }
};
