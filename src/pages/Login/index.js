import React from "react";
import { Link } from "react-router-dom";
import substract from "../../images/subtract.png";
import firstPictureForFetMe from "../../images/FirstPictureForFetMe.jpg";
import delivey from "../../images/delivey.jpg";
import "./index.css";
const Login = () => {
  return (
    <main>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action="index.html"
              autocomplete="off"
              className="sign-in-form"
            >
              <div className="logo">
                <img src={substract} alt="logo" />
                <h4>FitMe</h4>
              </div>

              <div className="heading">
                <h2>Welcome Back</h2>
                <h6>Not registred yet?</h6>
                <a href="#" className="toggle">
                  Sign up
                </a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    className="input-field"
                    autocomplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minlength="4"
                    className="input-field"
                    autocomplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <Link className="sign-btn" to="/blog">
                  Sign in
                </Link>
                <p className="text">
                  Forgotten your password or you login details?
                  <a href="#">Get help</a> signing in
                </p>
              </div>
            </form>

            <form
              action="index.html"
              autocomplete="off"
              className="sign-up-form"
            >
              <div className="logo">
                <img src={substract} alt="logo" />
                <h4>FitMe</h4>
              </div>

              <div className="heading">
                <h2>Get Started</h2>
                <h6>Already have an account?</h6>
                <a href="#" className="toggle">
                  Sign in
                </a>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    className="input-field"
                    autocomplete="off"
                    required
                  />
                  <label>Name</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="email"
                    className="input-field"
                    autocomplete="off"
                    required
                  />
                  <label>Email</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="password"
                    minlength="4"
                    className="input-field"
                    autocomplete="off"
                    required
                  />
                  <label>Password</label>
                </div>

                <input type="submit" value="Sign Up" className="sign-btn" />

                <p className="text">
                  By signing up, I agree to the
                  <a href="#">Terms of Services</a> and
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
            </form>
          </div>

          <div className="carousel">
            <div className="images-wrapper">
              <img
                src={firstPictureForFetMe}
                className="image img-1 show"
                alt="firstPictureForFetMe"
              />
              <img src={delivey} className="image img-2" alt="delivey" />
              <img
                src={firstPictureForFetMe}
                className="image img-3"
                alt="firstPictureForFetMe"
              />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>The most popular diets</h2>
                  <h2>Order your trial diet</h2>
                  <h2>Diets</h2>
                </div>
              </div>

              <div className="bullets">
                <span className="active" data-value="1"></span>
                <span data-value="2"></span>
                <span data-value="3"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
