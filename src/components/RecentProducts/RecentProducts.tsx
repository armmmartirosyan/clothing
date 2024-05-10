"use client";

import Image from "next/image";
import { Carousel } from "nuka-carousel";

export function RecentProducts() {
  return (
    <div className="recent-product">
      <div className="container">
        <div className="section-header">
          <h3>Recent Product</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            viverra at massa sit amet ultricies. Nullam consequat, mauris non
            interdum cursus
          </p>
        </div>
        <Carousel
          autoplay
          showDots
          className="row align-items-center product-slider product-slider-4"
        >
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <Image
                    width={500}
                    height={500}
                    src="http://localhost:3000/img/product-2.png"
                    alt="Product Image"
                  />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <Image
                    width={500}
                    height={500}
                    src="http://localhost:3000/img/product-4.png"
                    alt="Product Image"
                  />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <Image
                    width={500}
                    height={500}
                    src="http://localhost:3000/img/product-6.png"
                    alt="Product Image"
                  />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <Image
                    width={500}
                    height={500}
                    src="http://localhost:3000/img/product-8.png"
                    alt="Product Image"
                  />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="product-item">
              <div className="product-image">
                <a href="product-detail.html">
                  <Image
                    width={500}
                    height={500}
                    src="http://localhost:3000/img/product-9.png"
                    alt="Product Image"
                  />
                </a>
                <div className="product-action">
                  <a href="#">
                    <i className="fa fa-cart-plus"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-heart"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="product-content">
                <div className="title">
                  <a href="#">Phasellus Gravida</a>
                </div>
                <div className="ratting">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  $22 <span>$25</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
