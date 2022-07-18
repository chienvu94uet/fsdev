import React, { useId } from "react";
import css from "classnames";
import "./Input.scss";

const Input = ({ label, error, onBlur, onChange, ...inputProps }) => {
  const id = useId();
  const inputID = inputProps?.id || id;
  const inputClassNames = css({
    "form-control": true,
    "input-invalid": error,
  });

  return (
    <>
      {label && (
        <label htmlFor={inputID} className="form-label">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className={inputClassNames}
        id={inputID}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </>
  );
};

export default Input;
