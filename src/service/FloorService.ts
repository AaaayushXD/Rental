"use client";
import axios from "axios";
import { ApiResponse } from "@/helpers/ApiResponse";
import { Floor } from "@/@types/Floor";
import { ApiError } from "@/helpers/ApiError";

export const addFloorService = async (data: Floor) => {
  try {
    const response = await axios.post<ApiResponse>(`/api/floor/add`, {
      title: data.title,
      image: data.image,
    });
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error adding floor data.",
      null,
      error as string[]
    );
  }
};

export const getFloorsDetailService = async () => {
  try {
    const response = await axios.get<ApiResponse>("/api/floor/get");
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error getting floors detail.",
      null,
      error as string[]
    );
  }
};

export const getFloorDetailService = async (id: string) => {
  try {
    const response = await axios.get<ApiResponse>(`/api/floor/get/${id}`);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error getting floor based on id.",
      null,
      error as string[]
    );
  }
};

export const deleteFloorService = async (id: string) => {
  try {
    const response = await axios.delete<ApiResponse>(`/api/floor/remove/${id}`);
    if (response.data.statusCode !== 200) {
      throw new Error("Something went wrong.");
    }
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error deleting floor service.",
      null,
      error as string[]
    );
  }
};
