import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [value, setValue] = useState("");
  const toolbar = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "align",
    "strike",
    "script",
    "blockquote",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "code-block",
  ];

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{
          toolbar,
        }}
      />
    </>
  );
};

export default TextEditor;
