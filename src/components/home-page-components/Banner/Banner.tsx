"use client";

import { Carousel } from "nuka-carousel";
import Image from "next/image";
import { stringUtils } from "@/utils/string-utils";

export function Banner() {
  return (
    <div className="home-slider">
      <Carousel autoplay showDots className="main-slider">
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            alt="Slider Image"
            src={stringUtils.normalizeImageSrc("images/slider-1.jpg")}
          />
        </div>
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            alt="Slider Image"
            src={stringUtils.normalizeImageSrc("images/slider-1.jpg")}
          />
        </div>
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            alt="Slider Image"
            src={stringUtils.normalizeImageSrc("images/slider-1.jpg")}
          />
        </div>
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            alt="Slider Image"
            src={stringUtils.normalizeImageSrc("images/slider-1.jpg")}
          />
        </div>
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            alt="Slider Image"
            src={stringUtils.normalizeImageSrc("images/slider-1.jpg")}
          />
        </div>
        <div className="main-slider-item">
          <Image
            width={500}
            height={500}
            alt="Slider Image"
            src={stringUtils.normalizeImageSrc("images/slider-1.jpg")}
          />
        </div>
      </Carousel>
    </div>
  );
}
