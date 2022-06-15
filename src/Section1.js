/** @format */

import React from "react";
import intro from "./images/illustration-intro.png";

const Section1 = () => {
  return (
    <div className="section1">
      <img src={intro} alt="" />
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="btn">Get Started</button>
    </div>
  );
};

export default Section1;
