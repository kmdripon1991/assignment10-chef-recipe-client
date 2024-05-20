import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Shared/Recipe/Recipe";


const RecipeDetails = () => {
  const chefDetails = useLoaderData();
  // const { chefData } = useContext(AuthContext);
  // console.log(chefDetails);
  //   console.log(recipesData);
  const {
    name,
    bio,
    picture_url,
    years_experience,
    recipes_count,
    likes,
    recipes,
  } = chefDetails;
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-900 p-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-10 lg:px-10">
          <div>
            <h1 className="mb-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {name}
            </h1>
            <p className="mb-6 text-sm sm:text-base md:text-lg text-white">
              {bio}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-5">
              <div className="btn btn-error flex items-center justify-center gap-1 rounded-2xl p-5 py-3 font-semibold text-white">
                <span>Likes:</span>
                <span className="ml-2">{likes}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-2.252 4.32-2.252-4.32a2.25 2.25 0 112.252-4.32 2.25 2.25 0 012.252 4.32z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.24 5.43a5.374 5.374 0 00-7.62 0l-1.62 1.621-1.62-1.62a5.374 5.374 0 10-7.62 7.62l9 9 9-9a5.374 5.374 0 000-7.62z"
                  />
                </svg>
              </div>
              <div className="btn btn-info flex items-center justify-center gap-1 rounded-2xl p-5 py-3 font-semibold text-white">
                <span>Experience:</span>
                <span className="ml-2">{years_experience}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a4 4 0 118 0 4 4 0 01-8 0z" />
                  <path d="M9 13a1 1 0 012 0v1a1 1 0 11-2 0v-1zM10 7a1 1 0 00-1 1v2a1 1 0 102 0V8a1 1 0 00-1-1z" />
                </svg>
              </div>
              <div className="btn btn-accent flex items-center justify-center gap-1 rounded-2xl p-5 py-3 font-semibold text-white">
                <span>Recipe:</span>
                <span className="ml-2">{recipes_count}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M14 2H6a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-2 14H8v-2h4v2zm0-4H8v-2h4v2zm0-4H8V6h4v2z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={picture_url}
              alt="Profile"
              className="w-48 sm:w-56 md:w-72 lg:w-96 rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Recipe info */}
      {/* <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
          <a
            href="#"
            className="max-w-3xl mx-auto text-xl sm:text-4xl font-semibold inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
          >
            The Best Activewear from the Nordstrom Anniversary Sale
          </a>

          <a href="#">
            <img
              className="w-full my-4"
              src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1500"
              alt="Sunset in the mountains"
            />
          </a>
          <p className="text-gray-700 text-base leading-8 max-w-2xl mx-auto">
            Machu Picchu is a 15th-century Inca citadel situated on a mountain
            ridge 2,430 metres (7,970 ft) above sea level. It is located in the
            Cusco Region.
          </p>
          <div className="py-5 text-sm font-regular text-gray-900 flex items-center justify-center">
            <span className="mr-3 flex flex-row items-center">
              <svg
                className="text-indigo-600"
                fill="currentColor"
                height="13px"
                width="13px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style={{ enableBackground: "new 0 0 512 512" }}
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
              c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
              c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                    ></path>
                  </g>
                </g>
              </svg>
              <span className="ml-1">6 mins ago</span>
            </span>
            <a
              href="#"
              className="flex flex-row items-center hover:text-indigo-600  mr-3"
            >
              <svg
                className="text-indigo-600"
                fill="currentColor"
                height="16px"
                aria-hidden="true"
                role="img"
                focusable="false"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                ></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
              <span className="ml-1">AliSher Azimi</span>
            </a>
            <a
              href="#"
              className="flex flex-row items-center hover:text-indigo-600"
            >
              <svg
                className="text-indigo-600"
                fill="currentColor"
                height="16px"
                aria-hidden="true"
                role="img"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path
                  fill=""
                  d="M15.4496399,8.42490555 L8.66109799,1.63636364 L1.63636364,1.63636364 L1.63636364,8.66081885 L8.42522727,15.44178 C8.57869221,15.5954158 8.78693789,15.6817418 9.00409091,15.6817418 C9.22124393,15.6817418 9.42948961,15.5954158 9.58327627,15.4414581 L15.4486339,9.57610048 C15.7651495,9.25692435 15.7649133,8.74206554 15.4496399,8.42490555 Z M16.6084423,10.7304545 L10.7406818,16.59822 C10.280287,17.0591273 9.65554997,17.3181054 9.00409091,17.3181054 C8.35263185,17.3181054 7.72789481,17.0591273 7.26815877,16.5988788 L0.239976954,9.57887876 C0.0863319284,9.4254126 0,9.21716044 0,9 L0,0.818181818 C0,0.366312477 0.366312477,0 0.818181818,0 L9,0 C9.21699531,0 9.42510306,0.0862010512 9.57854191,0.239639906 L16.6084423,7.26954545 C17.5601275,8.22691012 17.5601275,9.77308988 16.6084423,10.7304545 Z M5,6 C4.44771525,6 4,5.55228475 4,5 C4,4.44771525 4.44771525,4 5,4 C5.55228475,4 6,4.44771525 6,5 C6,5.55228475 5.55228475,6 5,6 Z"
                ></path>
              </svg>
              <span className="ml-1">activewear</span>
            </a>
          </div>
          <hr />
        </div>
      </div> */}
      {
        recipes.map(recipe=><Recipe key={recipe._id} recipe={recipe}></Recipe>)
      }
    </> 
  );
};

export default RecipeDetails;
// md:size-96 size-72
