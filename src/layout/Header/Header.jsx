import React, { useState } from "react";
import "./Header.css";
import HeaderLogo from "../../assests/images/logo.svg";
import { Link } from "react-scroll/modules";
import { Link as ReactLink } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const _hanldeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header>
      <div className=" top">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <span className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </span>

              <span className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </span>

              <span className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </span>

              <span className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </span>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 right">
              <span className="icons">
                <i className="fa-solid fa-phone-flip"></i>
                <span className="number">+92 (345) 00 00 000</span>
              </span>
              <span className="icons">
                <i className="fa-solid fa-phone-flip"></i>
                <span className="number">+92 (345) 00 00 000</span>
              </span>
              <ReactLink
                to="#"
                target="_blank"
                className="callbeback"
              >
                call me back
              </ReactLink>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-6 col-8">
              <div className="logo">
                <img src={HeaderLogo} alt="logo" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-9 col-md-6 col-sm-6 col-4">
              <span className="responsiveicons" onClick={_hanldeToggle}>
                <i className="fa-solid fa-grip-lines"></i>
              </span>
              <div className="navbarside">
                <ul>
                  <Link to="whyus" className="navlink">
                    <li>why us</li>
                  </Link>
                  <Link to="about" className="navlink">
                    <li>about</li>
                  </Link>
                  <Link to="service" className="navlink">
                    <li>services</li>
                  </Link>
                  <Link to="portfolio" className="navlink">
                    <li>portfolio</li>
                  </Link>
                  <Link to="process" className="navlink">
                    <li>process</li>
                  </Link>
                  <Link to="review" className="navlink">
                    <li>reviews</li>
                  </Link>
                  <Link to="skill" className="navlink">
                    <li>our skills</li>
                  </Link>
                  <Link to="contact" className="navlink">
                    <li>contact us</li>
                  </Link>
                </ul>
              </div>
              {/* mobile menu  */}
              <div className={toggle ? "mobilemenu" : "mobilemenu.show"}>
                <div
                  className="mobilemenulist"
                  style={{ display: toggle ? "block" : "none" }}
                >
                  <ul>
                    <Link to="whyus" className="navlink">
                      <li>why us</li>
                    </Link>
                    <Link to="about" className="navlink">
                      <li>about</li>
                    </Link>
                    <Link to="service" className="navlink">
                      <li>services</li>
                    </Link>
                    <Link to="portfolio" className="navlink">
                      <li>portfolio</li>
                    </Link>
                    <Link to="process" className="navlink">
                      <li>process</li>
                    </Link>
                    <Link to="review" className="navlink">
                      <li>reviews</li>
                    </Link>
                    <Link to="skill" className="navlink">
                      <li>our skills</li>
                    </Link>
                    <Link to="contact" className="navlink">
                      <li>contact us</li>
                    </Link>
                  </ul>
                  <div className="closeicon" onClick={_hanldeToggle}>
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
