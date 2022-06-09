import React from "react";
import "./Footer.css";
import footerlogo from "../../assests/images/footerlogo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="footerleftside">
                <div className="imgsize logo">
                  <img src={footerlogo} alt="footer" className="img-fluid" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos veniam, animi quidem, ad alias incidunt vel magni
                  molestiae cupiditate perspiciatis tempora, quod reiciendis
                  aliquid nulla enim voluptas. Labore, nihil minus.
                </p>

                <p className="copyright">@agency 2020</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="footerservice">
                <h2>service</h2>
                <ul>
                  <Link to="#">
                    <li>Lorem</li>
                  </Link>
                  <Link to="#">
                    <li>Lorem Lorem</li>
                  </Link>

                  <Link to="#">
                    <li>Lorem</li>
                  </Link>
                  <Link to="#">
                    <li>Lorem Lorem</li>
                  </Link>
                  <Link to="#">
                    <li>Lorem</li>
                  </Link>
                  <Link to="#">
                    <li>Lorem Lorem</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="footeruslink">
                <h2>usefull links</h2>
                <ul>
                  <Link to="#">
                    <li>Lorem</li>
                  </Link>
                  <Link to="#">
                    <li>Lorem Lorem</li>
                  </Link>

                  <Link to="#">
                    <li>Lorem</li>
                  </Link>
                  <Link to="#">
                    <li>Lorem Lorem</li>
                  </Link>
                  <Link to="#">
                    <li>Lorem</li>
                  </Link>
                  <Link to="#">
                    <li>Lorem Lorem</li>
                  </Link>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="footeright">
                <h2>contacts</h2>
                <ul>
                  <li>
                  <span className="icons">
                      <i className="fa-solid fa-phone-flip"></i>
                      <span className="number">+92 (345) 00 00 000</span>
                    </span>
                  </li>
                  <li>
                    <span className="icons">
                      <i className="fa-solid fa-phone-flip"></i>
                      <span className="number">+92 (345) 00 00 000</span>
                    </span>
                  </li>
                  <li>
                  <span className="icons">
                  <i className="fa-solid fa-envelope"></i>
                      <span className="number">+92 (345) 00 00 000</span>
                    </span>
                  </li>
                </ul>
                <div className="followus">
                  <h2>follow us</h2>
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
              </div>
            </div>
          </div>
        </div>
      </>
    </footer>
  );
};

export default Footer;
