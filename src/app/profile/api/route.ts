import { NextRequest } from "next/server"; // method 1 to import NextRequest Headers
import { headers, cookies } from "next/headers"; // method 2 to import NextRequest Headers

const GET = async (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"), "Authorization Header");
  const nextHeaders = headers(); // method 2 to get headers

  const theme = request.cookies.get("theme"); // method 1 to get cookies

  console.log(theme, "Cookie from request");

  cookies().set("result", "success"); // method 2 to set cookies

  console.log(cookies().get("result"), "Cookie from next/headers");

  console.log(
    nextHeaders.get("Authorization"),
    "Authorization Header from next/headers"
  );
  return new Response("<h1>Profile API Route</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark, sessionId=12345",
    },
  });
};

export { GET };
