import React from "react";
const Button = (p) => {
  const { text, onClick } = p;
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
    >
      {text}
    </button>
  );
};

export default Button;
