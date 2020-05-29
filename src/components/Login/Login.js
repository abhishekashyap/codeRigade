import React from "react";
import "./Login.scss";
import Header from "../Header/Header";

export default function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const room = new Date().getTime(); // Generating random room code
    props.history.push(`/codebox?room=${room}`);
  };

  return (
    <div className="login-container">
      <Header />
      <main>
        <div className="animation">
          <lottie-player
            src="https://assets8.lottiefiles.com/private_files/lf30_vAtD7F.json"
            background="transparent"
            speed="2"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="btn-container">
          <form onSubmit={handleSubmit}>
            <input type="submit" value="Get started" />
          </form>
        </div>
      </main>
    </div>
  );
}
