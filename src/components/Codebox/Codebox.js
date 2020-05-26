import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";

import "./Codebox.scss";

// The following two imports is for the theme.
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

// This import is for the language syntax highlighting.
import "codemirror/mode/xml/xml";

export default function Codebox() {
  const [mode, setMode] = useState("xml");

  return (
    <div className="codebox-container">
      <header>
        <h1>CodeRigade</h1>
      </header>
      <main>
        <div className="controls">Controls go here</div>
        <CodeMirror
          value="<h1>I ♥ react-codemirror2</h1>"
          className="code-editor"
          options={{
            mode: "xml",
            theme: "material",
            lineNumbers: true,
          }}
          onChange={(editor, data, value) => {}}
        />
        {/* <textarea cols="150" rows="80"></textarea> */}
      </main>
    </div>
  );
}
