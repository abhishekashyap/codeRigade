import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login-container">
      <form>
        <input type="text" placeholder="Username" required />
        <input type="text" placeholder="CodeBox key" required />
        <input type="submit" />
      </form>
    </div>
  );
}
