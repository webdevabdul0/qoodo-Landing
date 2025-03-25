import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get("host");

  // Determine default locale based on the domain
  let defaultLocale = "hu"; // Default for qoodo.hu
  if (hostname?.endsWith("qoodo.es")) {
    defaultLocale = "es"; // Default for qoodo.es
  }

  // Get the current locale from the URL (first path segment)
  const pathnameParts = url.pathname.split("/");
  const currentLocale = pathnameParts[1];

  // If the current locale is already set correctly, continue as normal
  if (i18nConfig.locales.includes(currentLocale)) {
    return i18nRouter(request, i18nConfig);
  }

  // If no locale in URL, redirect to the correct one
  url.pathname = `/${defaultLocale}${url.pathname}`;
  return NextResponse.redirect(url);
}

// Apply middleware only to necessary paths
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
