import React from "react";
import Barik from "../../asset/banner1.jpg";
import rteweb from "../../asset/banner1.jpg";
import sugar from "../../asset/banner1.jpg";
import "./slider.css";


const Slider = () => {
  return (
    <div className="slider-container">
      <div
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Barik} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={rteweb} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={sugar} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      
    </div>
  );
};

export default Slider;
