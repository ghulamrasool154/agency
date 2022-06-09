import React from "react";
import "./Testimonialslider.css";
import img from "../../../assests/images/clinet.png";
const Testimonialslider = () => {
  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 m-0">
          <div className="slider-wapper bR ">
            <div className="silder-box  ">
              <div className="imgsider">
                <img src={img} alt="img" />
              </div>
              <div className="slider-context">
                <h3>join doe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quisquam facilis! Repudiandae magni, adipisci est voluptatum
                </p>
              </div>
            </div>
            <div className="silder-box bT">
              <div className="imgsider">
                <img src={img} alt="img" />
              </div>
              <div className="slider-context">
                <h3>join doe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quisquam facilis! Repudiandae magni, adipisci est voluptatum
                </p>
              </div>
            </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-0 m-0 rightside">
     
          <div className="slider-wapper">
            <div className="silder-box">
              <div className="imgsider">
                <img src={img} alt="img" />
              </div>
              <div className="slider-context">
                <h3>join doe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quisquam facilis! Repudiandae magni, adipisci est voluptatum
                </p>
              </div>
            </div>
            <div className="silder-box bT">
              <div className="imgsider">
                <img src={img} alt="img" />
              </div>
              <div className="slider-context">
                <h3>join doe</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quisquam facilis! Repudiandae magni, adipisci est voluptatum
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Testimonialslider;
