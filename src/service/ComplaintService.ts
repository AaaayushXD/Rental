import { Tickets } from "@/@types/Cards";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import axios from "axios";

export const addNewTicket = async (data: Tickets) => {
  try {
    const response = await axios.post<ApiResponse>(`/api/ticket/add`, {
      ...data,
    });
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error adding new tickets.",
      null,
      error as string[]
    );
  }
};
export const getRecentTicket = async () => {
  try {
    const response = await axios.get<ApiResponse>(`/api/ticket/get/recent`);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error getting recent tickets.",
      null,
      error as string[]
    );
  }
};
export const getAllTickets = async () => {
  try {
    const response = await axios.get<ApiResponse>(`/api/ticket/get`);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error getting all tickets.",
      null,
      error as string[]
    );
  }
};
export const fetchTickets = async () => {
  try {
    const response = await axios.get<ApiResponse>(`/api/ticket/get/severity `);
    return response;
  } catch (error) {
    throw new ApiError(
      400,
      "Error adding new tickets.",
      null,
      error as string[]
    );
  }
};
