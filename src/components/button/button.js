import React from "react";

const Button = ({ label }) => {
  return (
    <div>
      <button data-testid="test">Hi {label}</button>
    </div>
  );
};

export default Button;
