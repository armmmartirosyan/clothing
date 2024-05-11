import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { redirect } from "next/navigation";
import { AUTH_COOKIES } from "@/constants/shared-constants";

class AuthUtils {
  public requireAuth(cookieStore: ReadonlyRequestCookies) {
    const authCookie = cookieStore.get(AUTH_COOKIES.name);

    if (authCookie?.value !== AUTH_COOKIES.value) {
      redirect("sign-in");
    }
  }

  public requireNotAuth(cookieStore: ReadonlyRequestCookies) {
    const authCookie = cookieStore.get(AUTH_COOKIES.name);

    if (authCookie?.value === AUTH_COOKIES.value) {
      redirect("/dashboard/products");
    }
  }

  public async signOut(cookieStore: ReadonlyRequestCookies) {
    "use server";
    cookieStore.delete(AUTH_COOKIES.name);

    redirect("/sign-in");
  }
}

export const authUtils = new AuthUtils();
