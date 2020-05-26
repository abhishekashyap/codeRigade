import React from "react";
import "./Codebox.scss";

export default function Codebox() {
  return (
    <div className="codebox-container">
      <header>
        <h1>CodeRigade</h1>
      </header>
      <main>
        <div className="controls"></div>
        <textarea cols="150" rows="80"></textarea>
      </main>
    </div>
  );
}
