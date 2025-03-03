import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("eb_tkn");
  const authUser = request.cookies.get("eb_usr")?.value;

  const currentPath = new URL(request.url).pathname;

  // Allow access to the sign-in page without redirecting
  if (currentPath === "/auth/sign-in") {
    return NextResponse.next();
  }

  if (!authToken || !authUser) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  const dashboardRoutes: Record<string, string> = {
    BUSINESS: "/business",
    DISTRIBUTOR: "/distributor",
  };

  const userDashboard = dashboardRoutes[authUser];

  // Redirect to sign-in if the user type is unknown
  if (!userDashboard) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.url));
  }

  // Allow users to access their respective onboarding pages
  if (currentPath.startsWith(`/onboarding/${authUser.toLowerCase()}`)) {
    return NextResponse.next();
  }

  // Allow access if the user is already within their dashboard path
  if (currentPath.startsWith(userDashboard)) {
    return NextResponse.next();
  }

  // Redirect to the user's dashboard if they are outside it, that's beacuse they are signed in.
  return NextResponse.redirect(new URL(userDashboard, request.url));
}

export const config = {
  matcher: ["/business/:path*", "/distributor/:path*"],
};
