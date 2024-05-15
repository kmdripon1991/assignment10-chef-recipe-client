import React, { useContext, useState } from "react";
import login from "../../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaGoogle, FaGithub } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const {userLogin, googleSignIn, gitHubSignIn} = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  
  const handleUserSignIn = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email,password)
    .then(result=>{
      const loggedUser = result.user;
      navigate('/')
      console.log(loggedUser)
    })
    .catch(error =>console.error(error.message))
    console.log(email, password)
  }


  const handleGoogleSignIn =()=>{
    googleSignIn()
    .then(result =>{
      const googleUser = result.user;
      navigate('/')
      console.log(googleUser) 
    })
    .catch(error=>console.error(error.message))
  }

  const handleGitHubSignIn =()=>{
    gitHubSignIn()
    .then(result=>{
      const gitHubSignIn = result.user;
      navigate('/')
    })
    .catch(error=>console.error(error.message))
  }
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/r6C8WJ4/login.jpg)" }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left text-white">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            The chef's recipe log in serves as a digital repository,
            meticulously organizing culinary secrets, from ingredients to
            cooking techniques and tasting notes.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-screen-md shadow-2xl bg-base-200 bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <form onSubmit={handleUserSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
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
                  name="password"
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
                  <span>
                    Don't have an account?{" "}
                    <Link to="/register" className="link link-hover text-white">
                      Register now
                    </Link>
                  </span>
                </div>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="card-body pt-0">
            <div className="flex justify-center gap-8">
              <button onClick={handleGoogleSignIn} className="btn btn-info">
                <FaGoogle />
                <span>Login with Google</span>
              </button>
              <button onClick={handleGitHubSignIn} className="btn btn-success">
                <FaGithub />
                <span>Login with Github</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
