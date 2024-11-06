import axios from "axios";
import { Room } from "@/@types/Room";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";

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
    throw new ApiError(
      400,
      "Error adding room details.",
      null,
      error as string[]
    );
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
    throw new ApiError(
      400,
      "Error getting rooms based on floor.",
      null,
      error as string[]
    );
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
    throw new ApiError(
      400,
      "Error getting room based on id.",
      null,
      error as string[]
    );
  }
};

export const deleteAllRoomsOfAFloorService = async (id: string) => {
  try {
    const response = await axios.delete<ApiResponse>(
      `/api/room/remove/floor/${id}`
    );
    if (Boolean(response.data.success) === false) {
      throw new Error("Something went wrong while getting room detail.");
    }
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error deleting room detail.",
      null,
      error as string[]
    );
  }
};
