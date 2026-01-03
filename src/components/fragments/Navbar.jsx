import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="">
      <nav className="flex justify-between p-5 bg-blue-300  items-center ">
        <Link to="/">
          <img src="./logo.png" alt="logo" height={50} width={50} />
        </Link>
        <div className="-ml-115 font-bold text-xl md:text-2xl hidden md:flex">
          <h1>{props.title}</h1>
        </div>
        <ul className=" gap-5 hidden md:flex ">
          <Link
            to="/"
            className="hover:text-red-500 cursor-pointer hover:underline"
          >
            Home
          </Link>
          <Link
            to="/state"
            className="hover:text-red-500 cursor-pointer hover:underline"
          >
            State
          </Link>
          <Link
            to="/blog"
            className="hover:text-red-500 cursor-pointer hover:underline"
          >
            Blog
          </Link>
        </ul>
        <p className="hidden md:block">
          Selamat datang,{" "}
          <span className="font-bold text-red-400">{props.username}!</span>
        </p>
        <div className="md:hidden">
          <button
            className="p-2 border rounded cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
        {isOpen && (
          <div className="absolute top-10 right-0 bg-white p-5 z-10 rounded-l-md h-full md:hidden mt-10">
            <div className="flex flex-col gap-5">
              <Link
                to="/"
                className="hover:text-red-500 cursor-pointer hover:underline"
              >
                Home
              </Link>
              <Link
                to="/state"
                className="hover:text-red-500 cursor-pointer hover:underline mt-5"
              >
                Product
              </Link>
              <Link
                to="/blog"
                className="hover:text-red-500 cursor-pointer hover:underline mt-5"
              >
                Blog
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
