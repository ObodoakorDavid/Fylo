/** @format */

import React from "react";
import stay from "./images/illustration-stay-productive.png";

const Section3 = () => {
  return (
    <div className="section3">
      <img src={stay} alt="" />
      <div>
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share filess and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a href="">See how Fylo works <span>→</span></a>
      </div>
    </div>
  );
};

export default Section3;
