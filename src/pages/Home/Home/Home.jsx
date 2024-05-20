import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";

const Home = () => {
  const allData = useLoaderData();
  return (
    <div className="bg-gradient-to-r from-blue-900 to-green-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3 p-3 ">
        {allData.map((data) => (
          <Chef key={data._id} data={data}></Chef>
        ))}
      </div>
    </div>
  );
};

export default Home;
