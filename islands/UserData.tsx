/** @jsx h */
import { h, useEffect, useState } from "../client_deps.ts";

export default function UserDate(props: { username: string }) {
  const [user, setUser] = useState(null);
  console.log("using effect1", props);
  useEffect(() => {
    fetch("/api/users/" + props.username)
      .then((res) => res.json())
      .then((user) => setUser(user));
  });
  return user ? <div>User name: {user}</div> : <div>User not found</div>;
}
