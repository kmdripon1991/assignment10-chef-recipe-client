import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Navbar = () => {
  const { user, userSignOut, loader } = useContext(AuthContext);
  // if (loader) {
  //   return;
  // }

  const handleSignOut = () => {
    userSignOut()
      .then(() => console.log("user signOut"))
      .catch((error) => console.error(error.message));
  };
  console.log(user);
  return (
    <div className="navbar bg-green-600">
      <div className="flex-1">
        <Link className="text-2xl tracking-wider text-white">pantaBhat</Link>
      </div>
      <div className="flex justify-center items-center gap-3 text-white">
        <Link>
          <button className="btn btn-sm btn-outline btn-accent">Home</button>
        </Link>
        <Link>
          <button className="btn btn-sm btn-outline btn-accent">Blog</button>
        </Link>
        {loader ? (
          <>
            <span className="loading loading-spinner loading-sm"></span>
          </>
        ) : (
          <>
            {user ? (
              <>
                <div className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="user image"
                      title={user.displayName}
                      src={user.photoURL}
                    />
                  </div>
                </div>
                <Link to="/login">
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm btn-outline btn-accent"
                  >
                    SignOut
                  </button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm btn-outline btn-accent">
                  Login
                </button>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
