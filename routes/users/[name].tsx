import { h, PageProps, useEffect, useState } from "../../client_deps.ts";
import UserData from "../../islands/UserData.tsx";

export default function Greet(props: PageProps) {
  return (
    <div>
      <h3>User Data</h3>
      <UserData username={props.params.name} />
      <a href="/users">Users</a>
    </div>
  );
}
