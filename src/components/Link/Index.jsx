import React from "react";

const Link = (p) => {
  const { children, href } = p;
  return (
    <div className="text-center mt-4">
      <a href={href} className="text-blue-500 hover:underline">
        {children}
      </a>
    </div>
  );
};

export default Link;
