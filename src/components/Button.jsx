import React from "react";

const Button = ({ text, onClick,calculateResult,result }) => {
  return (
    <button className="btn" onClick={text === "=" ? calculateResult : onClick} disabled={result?true:false}>
      {text}
    </button>
  );
};

export default Button;
