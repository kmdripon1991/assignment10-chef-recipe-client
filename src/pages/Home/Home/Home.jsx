import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Chef from "../Chef/Chef";
import Carousel from "../../Carousel/Carousel";
import Services from "../../Services/Services";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";

const Home = () => {
  const allData = useLoaderData();
  return (
    <>
      <Carousel />
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3 p-3 ">
          {allData.map((data) => (
            <Chef key={data._id} data={data}></Chef>
          ))}
        </div>
      </div>
      <Services />
      <WhyChooseUs />
    </>
  );
};

export default Home;
