import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="card lg:card-side shadow-xl rounded-none w-screen bg-gradient-to-r from-blue-900 to-green-900">
          <div className="card-body p-32 space-y-5">
            <h2 className="card-title text-5xl font-bold">
              WellCome & Enjoy World Class Cuisine!
            </h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-start">
              <button className="btn btn-wide btn-accent">Contact Us</button>
            </div>
          </div>

          <figure className="">
            <img className="w-full" src="https://i.ibb.co/1v5Rx7Z/b1-removebg.png" alt="Album" />
          </figure>
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
        <div className="card lg:card-side shadow-xl rounded-none w-screen bg-gradient-to-r from-blue-900 to-green-900">
          <div className="card-body p-32 space-y-5">
            <h2 className="card-title text-5xl font-bold">
              WellCome & Enjoy World Class Cuisine!
            </h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-start">
              <button className="btn btn-wide btn-accent">Contact Us</button>
            </div>
          </div>

          <figure className="">
            <img src="https://i.ibb.co/XpgVYTY/b2.png" alt="Album" />
          </figure>
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
        <div className="card lg:card-side shadow-xl rounded-none w-screen bg-gradient-to-r from-blue-900 to-green-900">
          <div className="card-body p-32 space-y-5">
            <h2 className="card-title text-5xl font-bold">
              WellCome & Enjoy World Class Cuisine!
            </h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-start">
              <button className="btn btn-wide btn-accent">Contact Us</button>
            </div>
          </div>

          <figure className="">
            <img src="https://i.ibb.co/gvpd2sc/b3.jpg" alt="Album" />
          </figure>
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
        <div className="card lg:card-side shadow-xl rounded-none w-screen bg-gradient-to-r from-blue-900 to-green-900">
          <div className="card-body p-32 space-y-5">
            <h2 className="card-title text-5xl font-bold">
              WellCome & Enjoy World Class Cuisine!
            </h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-start">
              <button className="btn btn-wide btn-accent">Contact Us</button>
            </div>
          </div>

          <figure className="">
            <img
              src="https://i.ibb.co/yQf83Rs/b4.jpg"
              alt="Album"
            />
          </figure>
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
