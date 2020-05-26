import React, { Component } from "react";
import "./Login.scss";

export default class Login extends Component {
  render() {
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
}
