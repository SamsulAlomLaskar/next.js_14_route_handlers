import { comments } from "./data";

const GET = async () => {
  return Response.json(comments);
};

export { GET };
