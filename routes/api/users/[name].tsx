import { HandlerContext } from "../../../server_deps.ts";

const users = ["Peter", "John", "Janice"];

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const { name } = _ctx.params;
  const user = users.find((user) => user === name);

  if (user) {
    return Response.json(user);
  }
  return Response.json(null);
};
