import { JSX } from "react";
import { cookies } from "next/headers";
import { authUtils } from "@/utils/auth-utils";
import { SignInForm } from "@/components/sign-in-page-components";

export default function SignIn(): JSX.Element {
  const cookieStore = cookies();
  authUtils.requireNotAuth(cookieStore);

  return <SignInForm />;
}
