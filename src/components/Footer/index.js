import React from "react";
import subtract from "../../images/subtract.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-content">
          <div className="logo">
            <img className="subtract" src={subtract} alt="subtract" />
            <p className="FitMe">FitMe</p>
          </div>
          <div className="row">
            <ul>
              <li>
                <Link to="/diets">Diets</Link>
              </li>
              <li>
                <Link to="/calorie">Calorie calculator</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/delivery">Delivery</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/faq">Faq</Link>
              </li>
            </ul>
            <div className="contact-and-number">
              <p className="contact">Contact:</p>
              <p className="number"> +1 (213) 776 25 10</p>
            </div>
          </div>
        </div>
      </div>
      <div className="facebook">
        <a href="#">
          <i className="fa fa-facebook">
            <img src={facebook} alt="facebook" />
          </i>
        </a>
        <a href="#">
          <i className="fa fa-twitter">
            <img src={twitter} alt="twitter" />
          </i>
        </a>
        <a href="#">
          <i className="fa fa-instagram">
            <img src={instagram} alt="instagram" />
          </i>
        </a>
      </div>

      <div className="copyright">
        Policy privacy Copyright 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
