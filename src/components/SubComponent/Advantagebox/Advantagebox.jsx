import React from "react";
import "./Advantagebox.css";
const Advantagebox = ({ img, title, disc }) => {
  return (
    <div className="advantage-box">
      <div className="box-img">
        <img src={img} alt="innovation" className="img-fluid" />
      </div>
      <div className="box-content">
        <h3 className="advan-title">{title}</h3>
        <p>{disc}</p>
      </div>
    </div>
  );
};

export default Advantagebox;
