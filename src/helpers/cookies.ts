/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";

export const getCookies = async (key: string) => {
  const cookieStore = cookies();
  return cookieStore.get(key);
};

export const getAllCookies = async () => {
  const cookieStore = cookies();
  return cookieStore.getAll();
};

export const setCookie = async (key: string, value: string, options?: any) => {
  const cookieStore = cookies();
  cookieStore.set(key, value, { ...options });
};

export const hasCookie = async (key: string) => {
  const cookieStore = cookies();
  return cookieStore.has(key);
};

export const deleteCookie = async (key: string) => {
  const cookieStore = cookies();
  cookieStore.delete(key);
};
