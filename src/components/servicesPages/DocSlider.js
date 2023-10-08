import React from "react";
import autism1 from "../images/autism1.png";
import autism3 from "../images/autism3.png";
import docaut4 from "../images/docaut1.jpeg";

function DocSlider() {    // slider images
    const imgStyle = {
        maxWidth: "90%", // Set the maximum width to 100% of the parent container
        maxHeight: "400px",   // Maintain the aspect ratio
        display: "block",    // Ensure the image is displayed as a block element
        margin: "auto"
      };
      const sliderStyle = {
        maxWidth: "1500px", // Set your desired maximum width here
        margin: "auto",   // Center the slider horizontally
    };

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={sliderStyle}>
          <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src={autism1} class="d-block w-100" alt="..." style={imgStyle}/>
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={autism3} class="d-block w-100" alt="..." style={imgStyle}/>
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img src={docaut4} class="d-block w-100" alt="..." style={imgStyle}/>
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
    );
}
export default DocSlider;
