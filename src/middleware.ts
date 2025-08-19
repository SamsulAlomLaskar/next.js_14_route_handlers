import { match } from "assert";
import { url } from "inspector";
import { NextResponse, type NextRequest } from "next/server";

const middleware = (request: NextRequest) => {
  /* 
   if (request.nextUrl.pathname === "/profile") {
    return NextResponse.redirect(new URL("/hello", request.url));
    return NextResponse.rewrite(new URL("/hello", request.url));
  }
  return NextResponse.redirect(new URL("/", request.url)); 
  */

  const response = NextResponse.next();

  const userPreference = request.cookies.get("theme");
  if (!userPreference) {
    response.cookies.set("theme", "dark");
  }

  response.headers.set("Custom-Header", "This is a custom header value");
  return response;
};

/* 
const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: "/profile",
}; 
*/
export default middleware;
