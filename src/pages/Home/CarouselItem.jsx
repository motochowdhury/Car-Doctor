import React from "react";
import "./overlay.css";

const CarouselItem = ({ slider }) => {
  const { id, prev, next, img } = slider;
  return (
    <div
      id={`slide${id}`}
      className="carousel-item relative w-full justify-center">
      <div className="overlay h-1/2">
        <img src={img} alt="" className="rounded-xl h-[500px] w-[800px]" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 right-[15%] bottom-16">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="absolute top-1/4 text-left left-[20%]">
        <h1 className="text-5xl  text-white font-bold">
          Affordable <br /> Price For Car <br /> Servicing
        </h1>
        <p className="text-xl text-gray-300 mt-5">
          There are many variations of passages of available, <br /> but the
          majority have suffered alteration in some form
        </p>
        <div className="space-y-4 space-x-3">
          <button className="btn btn-primary">Discover More</button>
          <button className="btn btn-outline border border-white text-white">
            Latest Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
