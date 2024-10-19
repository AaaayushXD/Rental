/* eslint-disable @typescript-eslint/no-explicit-any */
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import { dbConnect } from "@/db/dbConnect";
import { ApiError } from "@/helpers/ApiError";
import UserModel from "@/models/User";
import { generateTokens } from "@/helpers/tokens";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone Number",
          type: "text",
          placeholder: "98XX-XXXXXX",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter Password",
        },
      },
      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        try {
          const user = await UserModel.findOne({ phone: credentials.phone });
          if (!user) {
            throw new ApiError(
              404,
              "No user found.",
              null,
              undefined,
              undefined,
              false
            );
          }
          const isValidUser = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isValidUser) {
            const { refreshToken } = await generateTokens(
              user._id.toString(),
              user.role
            );
            user.refreshToken = refreshToken;
            await user.updateOne({
              $set: {
                refreshToken: refreshToken,
              },
            });
            return user;
          } else {
            throw new ApiError(
              500,
              "Invalid user credentials. Please try again.",
              null,
              undefined,
              undefined,
              false
            );
          }
        } catch (error) {
          throw new ApiError(
            500,
            "Error logging in.",
            null,
            error as string[],
            undefined,
            false
          );
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
