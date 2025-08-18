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

export { GET };
