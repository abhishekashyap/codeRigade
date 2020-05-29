import React from "react";
import "./UsersList.scss";

import User from "../User/User";

export default function UsersList({ users }) {
  return (
    <div className="users">
      {users &&
        users.map((user) => (
          <User user={user} />
        ))}
    </div>
  );
}
