"use client";

import { Carousel } from "nuka-carousel";
import Image from "next/image";

export function Banner() {
  return (
    <div className="home-slider">
      <Carousel autoplay showDots className="main-slider">
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            src="http://localhost:3000/img/slider-1.jpg"
            alt="Slider Image"
          />
        </div>
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            src="http://localhost:3000/img/slider-2.jpg"
            alt="Slider Image"
          />
        </div>
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            src="http://localhost:3000/img/slider-3.jpg"
            alt="Slider Image"
          />
        </div>
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            src="http://localhost:3000/img/slider-1.jpg"
            alt="Slider Image"
          />
        </div>
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            src="http://localhost:3000/img/slider-2.jpg"
            alt="Slider Image"
          />
        </div>
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            src="http://localhost:3000/img/slider-3.jpg"
            alt="Slider Image"
          />
        </div>
      </Carousel>
    </div>
  );
}
