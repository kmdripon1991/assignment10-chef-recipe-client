import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-green-600">
      <div className="flex-1">
        <Link className="text-2xl tracking-wider text-white">pantaBhat</Link>
      </div>
      <div className="flex justify-center items-center gap-3 text-white">
        <Link>Home</Link>
        <Link>Blog</Link>
        <div className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
