import { HandlerContext } from "../../server_deps.ts";
const users = ["Peter", "John", "Janice"];

export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  return new Response(JSON.stringify(users));
};
