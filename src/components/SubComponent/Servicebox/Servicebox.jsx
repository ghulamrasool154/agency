import React from "react";
import { Link } from "react-router-dom";
import "./Servicebox.css";
const Servicebox = ({img, title, disc}) => {
  return (
    <div className="servicebox">
      <div className="service-img">
        <img src={img} alt="img" />
      </div>
      <div className="service-context">
        <h2>{title}</h2>
        <p>
          {disc}
        </p>
        <Link to="#">read more</Link>
      </div>
    </div>
  );
};

export default Servicebox;
