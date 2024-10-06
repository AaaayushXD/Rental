import bcrypt from "bcrypt";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import { ApiResponse } from "@/helpers/ApiResponse";
import UserModel from "@/models/User";
import { generateTokens } from "@/helpers/tokens";
import { setCookie } from "@/helpers/cookies";

export async function POST(req: Request) {
  await dbConnect();
  try {
    const {
      firstName,
      lastName,
      phone,
      password,
      married,
      children,
      role,
      totalPeople,
    } = await req.json();

    const exisitingUserWithSameNumber = await UserModel.findOne({
      phone,
    });

    if (exisitingUserWithSameNumber) {
      return Response.json(
        new ApiResponse(
          400,
          exisitingUserWithSameNumber,
          "User with same phone number found.",
          false
        ),
        {
          status: 400,
        }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      firstName,
      lastName,
      phone,
      password: hashedPassword,
      married: Boolean(married),
      children: +children,
      totalPeople: +totalPeople,
      role,
      refreshToken: "",
      joined: new Date().toISOString(),
    });
    const { accessToken, refreshToken } = await generateTokens(
      newUser._id.toString(),
      role
    );
    newUser.refreshToken = refreshToken;
    await newUser.save();
    await setCookie("accessToken", accessToken);
    await setCookie("refreshToken", refreshToken);
    return Response.json(
      new ApiResponse(
        201,
        {
          data: { firstName, lastName, phone, married, children, totalPeople },
          accessToken,
          refreshToken,
        },
        "User registered successfully.",
        true
      )
    );
  } catch (error) {
    return Response.json(
      new ApiError(
        500,
        "Something went wrong while registering new user.",
        null,
        error as string[]
      ),

      {
        status: 500,
      }
    );
  }
}
