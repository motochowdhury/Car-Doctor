import React from "react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const sliders = [
    {
      id: 1,
      prev: 6,
      next: 2,
      img: img1,
    },
    {
      id: 2,
      prev: 1,
      next: 3,
      img: img2,
    },
    {
      id: 3,
      prev: 2,
      next: 4,
      img: img3,
    },
    {
      id: 4,
      prev: 3,
      next: 5,
      img: img4,
    },
    {
      id: 5,
      prev: 4,
      next: 6,
      img: img5,
    },
    {
      id: 6,
      prev: 5,
      next: 1,
      img: img6,
    },
  ];

  return (
    <div>
      <div className="carousel w-full">
        {sliders.map((slider) => (
          <CarouselItem key={slider.id} slider={slider} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
