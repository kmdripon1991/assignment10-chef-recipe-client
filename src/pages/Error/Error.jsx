import React from "react";
import { Link } from "react-router-dom";

const Error = ({ error }) => {
  console.log(error);
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://i.ibb.co/4Pw9Wjp/error.jpg')" }}
    >
      <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for seems to have gone on a little adventure.
          Don't worry, we'll help you find your way back home.
        </p>
        <Link to="/">
          <button className="btn btn-primary btn-sm md:btn-md lg:btn-lg">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
