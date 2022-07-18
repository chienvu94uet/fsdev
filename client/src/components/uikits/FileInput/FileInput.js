import React from "react";
import "./FileInput.scss";

const FileInput = ({ field, error, onChange }) => {
  return (
    <>
      <input type="file" name={field.name} onChange={onChange} />
      {error && <span className="error">{error}</span>}
    </>
  );
};

export default FileInput;
