import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Chef = ({ data }) => {
  
  const { _id, name, likes, years_experience, picture_url, recipes_count } =
    data;
    // const [data, setData] = useState([])

    // const handleViewDetails =()=>{
    //   setData(chef)
    //   setChefData(data)
    // }
    

  return (
    <div className="card bg-cyan-100 shadow-xl w-full">
      <figure>
        <img src={picture_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{likes} Likes</div>
        </h2>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">
            Experience: {years_experience} years
          </div>
          <div className="badge badge-outline">Recipe: {recipes_count}</div>
        </div>
        <Link to={`/chef-recipe/${_id}`}>
          <button className="btn btn-block btn-outline btn-accent">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Chef;
