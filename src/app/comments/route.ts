import { NextRequest } from "next/server";
import { comments } from "./data";

const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const searchQuery = searchParams.get("query");
  const filteredComments = searchQuery
    ? comments.filter((comment) => comment.text.includes(searchQuery))
    : comments;
  return Response.json(filteredComments);
};

const POST = async (request: Request) => {
  const newComment = await request.json();

  const createNewComment = {
    id: comments.length + 1,
    text: newComment.text,
  };

  comments.push(createNewComment);

  return new Response(JSON.stringify(createNewComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
};
export { GET, POST };
