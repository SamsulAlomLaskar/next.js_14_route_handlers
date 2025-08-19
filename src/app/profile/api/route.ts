import { NextRequest } from "next/server"; // method 1 to import NextRequest Headers
import { headers } from "next/headers"; // method 2 to import NextRequest Headers

const GET = async (request: NextRequest) => {
  const requestHeaders = new Headers(request.headers);
  const nextHeaders = headers(); // method 2 to get headers
  console.log(requestHeaders.get("Authorization"), "Authorization Header");
  console.log(
    nextHeaders.get("Authorization"),
    "Authorization Header from next/headers"
  );
  return new Response("<h1>Profile API Route</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
};

export { GET };
