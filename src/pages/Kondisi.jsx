import React from "react";

const Kondisi = ({ isLogin = true }) => {
  return (
    <div className="bg-gray-900 text-white p-5">
      <div>{isLogin ? <div>login</div> : <div>logout</div>}</div>
    </div>
  );
};

export default Kondisi;
