import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <>
      <div className="text-2xl font-bold flex h-screen items-center justify-center text-white flex-col">
        404 Not Found
        <div className="mt-5">
          <Link
            to="/"
            className="text-white bg-slate-500 p-2 rounded-sm hover:bg-slate-800"
          >
            Kembali ke Landing Page
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
