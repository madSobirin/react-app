import { useState } from "react";
import { Link } from "react-router-dom";
const StatePage = () => {
  const [show, setShow] = useState();
  return (
    <>
      <div className="flex h-screen items-center justify-center text-white p-5 flex-col ">
        {show && <label htmlFor="">Ini label yang akan hilang </label>}

        <button
          onClick={() => setShow(!show)}
          className="bg-red-200 p-5 rounded-sm mt-10 cursor-pointer"
        >
          {show ? "Hide" : "Show"}
        </button>

        <div className="mt-5">
          <Link to="/">Kembali ke Landing Page</Link>
        </div>
      </div>
    </>
  );
};

export default StatePage;
