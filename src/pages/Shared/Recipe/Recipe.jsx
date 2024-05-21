import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";

const Recipe = ({ recipe }) => {
  const { title, recipes_url, directions, ingredients, rating } = recipe;
  const [favorite, setFavorite] = useState(true);
  const [isDisabled,setIsDisabled] = useState(false)
  const handleFavorite = () => {
    if (favorite) {
      setFavorite(!favorite);
      toast("Added as favorite.");
    } else {
      setFavorite(!favorite);
      setDisabled(true)
      toast("Remove from favorite.");
    }
  };
  return (
    <div className="max-w-screen-lg mx-auto mt-5  px-5 sm:px-10 md:px-16">
      <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto ">
        <h1 className="max-w-3xl mx-auto text-xl sm:text-4xl font-semibold hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2 text-center">
          {title}
        </h1>
        <img
          className="w-full my-4"
          src={recipes_url}
        />
        {/* Recipe list */}
        <div>
          <h1 className="font-bold text-xl text-green-900">Ingredient List</h1>
          <ul className="mt-3 flex flex-col space-y-2">
            {ingredients.map((ingredient, idx) => (
              <li key={idx} className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-2 h-auto w-6 text-green-600 sm:w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  ></path>
                </svg>
                <p className="text-base text-slate-700 sm:text-lg">
                  {ingredient}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* Cooking method */}
        <div className="mt-5">
          <h1 className="font-bold text-xl text-green-900">Cooking Method</h1>
          <p className="text-gray-700 text-base leading-8">{directions}</p>
        </div>
        <div className="py-5 text-sm font-regular text-gray-900 flex items-center justify-between">
          <div className="space-x-2">
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-yellow-500" />}
              fullSymbol={<FaStar />}
            />
            <span>{rating}</span>
          </div>
          <button onClick={handleFavorite} disabled={isDisabled}>
            {favorite ? (
              <GrFavorite className="text-2xl" />
            ) : (
              <MdFavorite className="text-2xl text-red-600" />
            )}
          </button>
          <Toaster />
        </div>
        <hr className="my-6" />
      </div>
    </div>
  );
};

export default Recipe;
