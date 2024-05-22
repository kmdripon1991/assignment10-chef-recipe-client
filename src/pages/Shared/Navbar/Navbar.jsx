import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut, loader } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then(() => console.log("user signOut"))
      .catch((error) => console.error(error.message));
  };
  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 bg-base-200">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <Link to='/' className="normal-case text-4xl">
            <div className="flex items-center space-x-2">
              <h2 className="text-neutral-content font-bold tracking-wider">mammaMia</h2>
            </div>
          </Link>
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal space-x-10 text-base font-bold">
              <li>
                <NavLink
                  to="/"
                  className="hover:underline hover:underline-offset-4"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className="hover:underline hover:underline-offset-4"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          {loader ? (
            <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-primary"></div>
          ) : (
            <>
              {user ? (
                <div className="hidden lg:flex lg:items-center gap-x-2">
                  <img
                    className="inline-block w-10 h-10 rounded-full ring ring-primary"
                    alt="user"
                    title={user.displayName}
                    src={user.photoURL}
                  />
                  <Link to="/login">
                    <button
                      onClick={handleSignOut}
                      className="btn btn-primary text-white font-semibold"
                    >
                      Logout
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="hidden lg:flex lg:items-center gap-x-2">
                  <Link to="/register">
                    <button className="btn btn-ghost text-neutral-content font-semibold">
                      Sign up
                    </button>
                  </Link>
                  <Link to="/login">
                    <button className="btn btn-primary text-white font-semibold">
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </>
          )}
          <div className="lg:hidden">
            <button className="btn btn-ghost btn-circle text-neutral-content">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
