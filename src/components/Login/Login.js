import React, { Component } from "react";
import "./login.scss";

export default class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <form>
          <input type="text" placeholder="Username" required />
          <input type="text" placeholder="Room code" required />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
