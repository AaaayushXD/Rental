import jwt from "jsonwebtoken";
import { ApiError } from "./ApiError";

const generateAccessToken = async (id: string, role: "admin" | "tenant") => {
  try {
    return jwt.sign(
      {
        id,
        role,
      },
      process.env.ACCESS_TOKEN_SECRET || "",
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY || 60 }
    );
  } catch (error) {
    throw new ApiError(
      500,
      "Error while generating access token.",
      null,
      [error as string],
      undefined,
      false
    );
  }
};
const generateRefreshToken = async (id: string, role: "admin" | "tenant") => {
  try {
    return jwt.sign(
      {
        id,
        role,
      },
      process.env.REFRESH_TOKEN_SECRET || "",
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY || 3600 }
    );
  } catch (error) {
    throw new ApiError(
      500,
      "Error while generating refresh token.",
      null,
      [error as string],
      undefined,
      false
    );
  }
};

export const generateTokens = async (id: string, role: "tenant" | "admin") => {
  try {
    const accessToken = await generateAccessToken(id, role);
    const refreshToken = await generateRefreshToken(id, role);
    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Error generating tokens.",
      null,
      error as string[],
      undefined,
      false
    );
  }
};
