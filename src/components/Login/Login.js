import React, { useState } from "react";
import "./Login.scss";

export default function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = new Date().getTime(); // Generating random room code
    props.history.push(`/codebox?room=${room}`);
  };

  return (
    <div className="login-container">
      <header>
        <h1>CodeRigade</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" required />
        <input type="submit" value="Get started" />
      </form>
    </div>
  );
}
