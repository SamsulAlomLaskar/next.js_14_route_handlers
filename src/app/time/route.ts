export const dynmic = "force-dynamic"; // This route will always be dynamic

const GET = async () => {
  return Response.json({ time: new Date().toLocaleTimeString() });
};
export { GET };
