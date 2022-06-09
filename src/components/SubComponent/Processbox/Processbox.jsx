import React from "react";
import './Porcessbox.css'
const Processbox = ({img, icon, title}) => {
  return (
    <div className="process-box">
      <div className="imgbox">
        <img src={img} alt="processimg" />
        <div className="iconbox">
          {icon}
        </div>
      </div>
      <div className="imgcontent">
        <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </div>
  );
};

export default Processbox;
