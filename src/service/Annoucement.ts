import { annoucementSchema } from "@/@types/Schemas";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import axios from "axios";

export const getRecentAnnoucement = async () => {
  try {
    const response = await axios.get<ApiResponse>(
      `/api/annoucement/get/recent`
    );
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error fetching recent annoucement.",
      null,
      error as string[]
    );
  }
};
export const addNewAnnoucement = async (data: annoucementSchema) => {
  try {
    const response = await axios.post<ApiResponse>(`/api/annoucement/add`, {
      title: data.title,
      description: data.description,
      dateAndTime: new Date().toISOString(),
    });
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error fetching recent annoucement.",
      null,
      error as string[]
    );
  }
};
export const fetchAnnoucement = async () => {
  try {
    const response = await axios.get<ApiResponse>(`/api/annoucement/get?page=`);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error fetching all annoucement.",
      null,
      error as string[]
    );
  }
};
