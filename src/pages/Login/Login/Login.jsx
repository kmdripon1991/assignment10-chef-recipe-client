import React, { useState } from "react";
import login from "../../../assets/images/login.jpg";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/r6C8WJ4/login.jpg)" }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="grow"
                  required
                />
                <kbd
                  onClick={() => setShowPassword(!showPassword)}
                  className="kbd kbd-sm"
                >
                  {showPassword ? <FaRegEye /> : <IoMdEyeOff />}
                </kbd>
              </label>
              <label className="label label-text-alt">
                <div>
                  <Link className=" link link-hover">Forgot password?</Link>{" "}
                  <br />
                  <Link>
                    Don't have an account?{" "}
                    <Link to="/register" className="link link-hover text-white">
                      Register now
                    </Link>
                  </Link>
                </div>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
