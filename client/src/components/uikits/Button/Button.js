import React from "react";
import classnames from "classnames";
import "./Button.scss";

const Button = ({ children, onClick, variant, size, ...buttonProps }) => {
  const buttonClassNames = classnames({
    btn: true,
    [`btn--${variant}`]: variant,
    [`btn--${size}`]: size,
  });
  return (
    <button {...buttonProps} onClick={onClick} className={buttonClassNames}>
      {children}
    </button>
  );
};

export default Button;
