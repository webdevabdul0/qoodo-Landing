import { i18nRouter } from "next-i18n-router";
import i18nConfig from "./i18nConfig";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host") || "";

  // Define domain-to-locale mapping
  const domainLocales: Record<string, string> = {
    "qoodo.hu": "hu",
    "qoodo.es": "es",
  };

  // Determine the locale based on the domain
  const locale = domainLocales[hostname];

  if (locale && !url.pathname.startsWith(`/${locale}`)) {
    url.pathname = `/${locale}${url.pathname}`;
    return NextResponse.redirect(url);
  }

  return i18nRouter(request, i18nConfig);
}

// Only applies middleware to specific routes
export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
