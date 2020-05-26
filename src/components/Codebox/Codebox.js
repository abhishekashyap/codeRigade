import React, { useState } from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import { FiShare2 } from "react-icons/fi";

// The following two imports is for the theme.
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

// This import is for the language syntax highlighting.
import "codemirror/mode/xml/xml";

// Overrides some codemirror classes, don't change order
import "./Codebox.scss";

export default function Codebox() {
  const [mode, setMode] = useState({
    mode: { name: "xml" },
    theme: "material",
    lineNumbers: true,
  });

  return (
    <div className="codebox-container">
      <header>
        <h1>CodeRigade</h1>
      </header>
      <main>
        <div className="controls">
          <div className="control-dropdown">
            <select>
              <option selected value="xml">
                XML/HTML
              </option>
              <option value="css">CSS</option>
              <option value="js">Javascript</option>
              <option value="java">Java</option>
            </select>
          </div>
          <div className="control-icon">
            <span>Share&nbsp;</span>
            <FiShare2 size={15} />
          </div>
          <div className="control-dropdown">
            <select id="text">
              <option value="Material">Material</option>
              <option value="monokai">Monokai</option>
            </select>
          </div>
        </div>
        <CodeMirror
          value="<h1>I ♥ react-codemirror2</h1>"
          className="code-editor"
          options={mode}
          onChange={(editor, data, value) => {
            console.log("Editor: ", editor);
            console.log("Data: ", data);
            console.log("Value: ", value);
          }}
        />
        {/* <textarea cols="150" rows="80"></textarea> */}
      </main>
    </div>
  );
}
