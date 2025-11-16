import React from "react";
import { Link } from "react-router-dom";

const Linkk = (p) => {
  const { children, href } = p;
  return (
    <div className="text-center mt-4">
      <Link to={href} className="text-blue-500 hover:underline">
        {children}
      </Link>
    </div>
  );
};

export default Linkk;
