import { comments } from "./data";

const GET = async () => {
  return Response.json(comments);
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
