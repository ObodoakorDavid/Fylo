/** @format */

import React from "react";

import access from "./images/icon-access-anywhere.svg";
import security from "./images/icon-security.svg";
import collaboration from "./images/icon-collaboration.svg";
import store from "./images/icon-any-file.svg";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="containers">
        <img src={access} alt="" />
        <h2>Accesss your files, anywhere</h2>
        <p>
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you anywhere
        </p>
      </div>
      <div className="containers">
        <img src={security} alt="" />
        <h2>Security you can trust</h2>
        <p>
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </div>
      <div className="containers">
        <img src={collaboration} alt="" />
        <h2>Real-Time collaboration</h2>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>
      <div className="containers">
        <img src={store} alt="" />
        <h2>Store any type of file</h2>
        <p>
          Whether you're sharing holidays photos or work documents, fylo has you
          covered allowing for all files types to be securely stored and shared.
        </p>
      </div>
    </div>
  );
};

export default Section2;
