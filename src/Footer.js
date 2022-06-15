/** @format */

import React from "react";
import img from "./images/logo.svg";
import location from "./images/icon-location.svg";
import phone from "./images/icon-phone.svg";
import email from "./images/icon-email.svg";

import facebooklogo from "./images/facebook.svg";
import twitterlogo from "./images/twitter.svg";
import instagramlogo from "./images/instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="getearly">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. if you have any questions, our support team would
          be happy to help you.
        </p>
        <div>
          <input type="text" placeholder="email@example.com" />
          <button>Get Started For Free</button>
        </div>
      </div>

      <div className="realfooter">
        <img className="footerlogo" src={img} alt="" />

        <div className="footer-details">
          <div className="three">
            <img className="location" src={location} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a
              et reprehenderit nam cupiditate praesentium voluptate tempore quo
              aliquid velit suscipit autem sequi, corrupti sit. Iste repellat
              excepturi nesciunt ea.
            </p>
          </div>

          <div>
            <div className="three">
              <img src={phone} alt="" />
              <p>+1-543-123-4567</p>
            </div>
            <div className="three">
              <img src={email} alt="" />
              <p>example@fylo.com</p>
            </div>
          </div>

          <div className="ajb">
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>

          <div className="ctp">
            <p>Conact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>

          <div className="logos">
            <img src={facebooklogo} alt="" />
            <img src={twitterlogo} alt="" />
            <img src={instagramlogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
