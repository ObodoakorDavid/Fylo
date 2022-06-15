/** @format */

import React from "react";
import quote from "./images/bg-quotes.png";
import profile1 from "./images/profile-1.jpg";
import profile2 from "./images/profile-2.jpg";
import profile3 from "./images/profile-3.jpg";
import quotes from "./images/bg-quotes.png";

const Section4 = () => {
  return (
    <div className="section4">
      <img className="quoteimg" src={quotes} alt="" />

      <div className="threequotes">
        <div className="quotes">
          <p className="firstp">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="inner-quotes">
            <img src={profile1} alt="" />
            <div>
              <p>Satish Patel</p>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="quotes">
          <p className="firstp">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="inner-quotes">
            <img src={profile2} alt="" />
            <div>
              <p>Bruce McKenzie</p>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
        <div className="quotes">
          <p className="firstp">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="inner-quotes">
            <img src={profile3} alt="" />
            <div>
              <p>Iva Boyd</p>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
