import React from "react";
import "./Users.scss";

export default function Users({ usersList }) {
  return (
    <div className="users">
      {usersList &&
        usersList.map((user) => (
          <div className="user" key={user.id}>
            <span></span>&nbsp;&nbsp;
            {user.name}
          </div>
        ))}
    </div>
  );
}
