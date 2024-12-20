import axios from "axios";
import { Rent } from "@/@types/Rent";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";

export const getRentDetailService = async (id: string) => {
  try {
    const response = await axios.get<ApiResponse>(`/api/rent/${id}`);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error getting rent details.",
      null,
      error as string[]
    );
  }
};

export const addRentservice = async (data: Rent) => {
  try {
    const response = await axios.post<ApiResponse>(`/api/rent/add`, {
      roomId: data.roomId,
      price: data.price,
      electricity: data.electricity,
      water: data.water,
    });
    if (!response.data.success) {
      throw new Error("Something went wrong while adding the rooms.");
    }
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error adding rent detail.",
      null,
      error as string[]
    );
  }
};

export const updateRentService = async () => {};
