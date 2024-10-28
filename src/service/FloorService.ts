"use client";
import axios, { AxiosError } from "axios";
import { ApiResponse } from "@/helpers/ApiResponse";
import { Floor } from "@/@types/Floor";

export const addFloorService = async (data: Floor) => {
  try {
    const response = await axios.post<ApiResponse>(`/api/floor/add`, {
      title: data.title,
      image: data.image,
    });
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};

export const getFloorsDetailService = async () => {
  try {
    const response = await axios.get<ApiResponse>("/api/floor/get");
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
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
    const axiosError = error as AxiosError<ApiResponse>;
    return axiosError;
  }
};
