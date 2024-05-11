"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import {
  INVALID_LOGIN_OR_PASS_ERROR,
  AUTH_COOKIES,
  LOGIN,
  PASS,
} from "@/constants/shared-constants";

export const signIn = async (formData: FormData) => {
  const login = (formData.get("login")! as string).trim();
  const password = (formData.get("password")! as string).trim();

  if (LOGIN === login && PASS === password) {
    cookies().set(AUTH_COOKIES.name, AUTH_COOKIES.value);

    redirect("/dashboard/products");
  }

  return INVALID_LOGIN_OR_PASS_ERROR;
};
