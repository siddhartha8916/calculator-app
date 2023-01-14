import React, { useState } from "react";

const Screen = ({ value, operation, num1, num2, result }) => {
  return (
    <>
      <input
        type="text"
        className="screen"
        value={result ? result : value}
        readOnly
        maxLength={10}
      />
    </>
  );
};

export default Screen;
