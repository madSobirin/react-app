import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState();

  return (
    <nav className="flex justify-between p-5 bg-blue-300    ">
      <h1>{props.title}</h1>
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
          to=""
          className="hover:text-red-500 cursor-pointer hover:underline"
        >
          Category
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
        <ul className="absolute top-10 right-0 bg-white p-5 z-10 rounded-l-md h-full md:hidden mt-10">
          <li className="hover:text-red-500 cursor-pointer hover:underline">
            Home
          </li>
          <li className="hover:text-red-500 cursor-pointer hover:underline mt-5">
            Product
          </li>
          <li className="hover:text-red-500 cursor-pointer hover:underline mt-5">
            Category
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
