import { h } from "../../client_deps.ts";
import Users from "../../islands/Users.tsx";

export default function UsersPage() {
  return (
    <main>
      <h1>Users</h1>
      <Users />
      <a href="/">Home</a>
    </main>
  );
}
