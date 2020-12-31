import React from "react";
import "./User.scss"

export default function User({ user }) {
  return (
    <div className="user" key={user.id}>
      <span></span>&nbsp;&nbsp;
      {user.name}
    </div>
  );
}
