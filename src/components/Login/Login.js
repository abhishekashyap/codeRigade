import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <header>
        <h1>CodeRigade</h1>
      </header>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="text" placeholder="CodeBox key" required />
        <input type="submit" value="Get started" />
      </form>
    </div>
  );
}
