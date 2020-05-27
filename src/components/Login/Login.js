import React, { useState } from "react";
import "./Login.scss";

export default function Login(props) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = new Date().getTime(); // Generating random key
    props.history.push(`/codebox?name=${name}&code=${code}`);
  };

  return (
    <div className="login-container">
      <header>
        <h1>CodeRigade</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input type="submit" value="Get started" />
      </form>
    </div>
  );
}
