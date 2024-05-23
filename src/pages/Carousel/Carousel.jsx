import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/MD8CXth/carousel66.png"
          alt="Italian Cuisine"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full flex flex-col justify-center items-start p-8 mx-auto text-white">
          <h2 className="text-4xl font-bold">Authentic Italian Food</h2>
          <p className="mt-4 text-lg">
            Experience the true flavors of Italy with our traditional recipes
            and high-quality ingredients.
          </p>
          <div className="mt-6">
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/VSSwTRn/carousel22.jpg"
          alt="Italian Cuisine"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full flex flex-col justify-center items-start p-8 mx-auto text-white">
          <h2 className="text-4xl font-bold">Classic Margherita Pizza</h2>
          <p className="mt-4 text-lg">
            Enjoy Italy's best with fresh dough, rich tomato sauce, mozzarella,
            and basil. Simple, authentic, and delicious!
          </p>
          <div className="mt-6">
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/1sG1Wd9/carousel33.png"
          alt="Italian Cuisine"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full flex flex-col justify-center items-start p-8 mx-auto text-white">
          <h2 className="text-4xl font-bold">Italian Culinary Excellence</h2>
          <p className="mt-4 text-lg">
            Experience culinary excellence with time-honored recipes crafted
            from the finest, freshest ingredients for an authentic taste
            sensation.
          </p>
          <div className="mt-6">
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co/9NdsWtK/carousel55.png"
          alt="Italian Cuisine"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative h-full flex flex-col justify-center items-start p-8 mx-auto text-white">
          <h2 className="text-4xl font-bold">
            Masters of Italian Culinary Art
          </h2>
          <p className="mt-4 text-lg">
            Italian cuisine's expert chefs blend tradition and innovation,
            crafting exquisite dishes with high-quality ingredients.
          </p>
          <div className="mt-6">
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
