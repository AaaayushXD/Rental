import { Room } from "@/@types/Room";
import { ApiResponse } from "@/helpers/ApiResponse";
import axios, { AxiosError } from "axios";

export const addRoomServices = async (data: Room) => {
  try {
    const response = await axios.post<ApiResponse>(`/api/room/add`, {
      roomNo: +data.roomNo,
      size: {
        width: +data.size.width,
        height: +data.size.height,
      },
      isBooked: data.isBooked,
      image: data.image,
      floor: data.floor,
    });
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong while adding the rooms.");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};

export const getRoomsBasedOnFloorService = async (no: string) => {
  try {
    const response = await axios.get<ApiResponse>(`/api/room/get/floor/${no}`);
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong while getting the rooms detail.");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};

export const getRoomsBasedOnIdService = async (id: string) => {
  try {
    const response = await axios.get<ApiResponse>(`/api/room/get/${id}`);
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong while getting room detail.");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};
