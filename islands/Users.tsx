/** @jsx h */
import { h, useEffect, useState } from "../client_deps.ts";

export default function Users() {
  const [show, setShow] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  });

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      <br />
      {show && (
        <ul>
          {users.map((user) => (
            <li>
              <a href={"/users/" + user}>{user}</a>
            </li>
          ))}
        </ul>
      )}

      <br />
    </div>
  );
}
