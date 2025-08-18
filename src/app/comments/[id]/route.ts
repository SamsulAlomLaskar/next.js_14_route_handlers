import { param } from "express-validator";
import { comments } from "../data";

const GET = async (
  _request: Request,
  { params }: { params: { id: string } }
) => {
  const commentId = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return Response.json(commentId);
};

const PATCH = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const body = await request.json();
  const { text } = body;

  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );

  comments[commentIndex].text = text;

  return Response.json(comments[commentIndex]);
};

const DELETE = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const commentId = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments[commentId];
  comments.splice(commentId, 1);

  return Response.json(deletedComment);
};

export { GET, PATCH, DELETE };
