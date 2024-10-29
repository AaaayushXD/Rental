import { Rent } from "@/@types/Rent";
import { ApiResponse } from "@/helpers/ApiResponse";
import axios, { AxiosError } from "axios";

export const getRentDetailService = async (id: string) => {
  try {
    const response = await axios.get<ApiResponse>(`/api/rent/${id}`);
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
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
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};

export const updateRentService = async () => {};
