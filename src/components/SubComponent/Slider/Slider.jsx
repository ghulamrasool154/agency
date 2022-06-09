import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'
import { Link } from "react-router-dom";

const SliderSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="SlickSlider">
          <h2>we are experts</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            voluptatem distinctio culpa aliquid repellendus quo ducimus
            voluptatibus sed, beatae veritatis voluptatum soluta, tempore
            numquam fuga repellat labore, perspiciatis id alias.
          </p>
          <Link to="#" className="readmoreButton">read more</Link>
        </div>
        <div className="SlickSlider">
          <h2>we are really expert</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            voluptatem distinctio culpa aliquid repellendus quo ducimus
            voluptatibus sed, beatae veritatis voluptatum soluta, tempore
            numquam fuga repellat labore, perspiciatis id alias.
          </p>
          <Link to='#' className="readmoreButton">read more</Link>
        </div>
        <div className="SlickSlider">
          <h2>mazak kar rha</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            voluptatem distinctio culpa aliquid repellendus quo ducimus
            voluptatibus sed, beatae veritatis voluptatum soluta, tempore
            numquam fuga repellat labore, perspiciatis id alias.
          </p>
          <Link to="#" className="readmoreButton">read more</Link>
        </div>
      </Slider>
    </>
  );
};

export default SliderSlick;
