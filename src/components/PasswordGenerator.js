import React, { useState } from "react";

import "../style/PasswordGenerator.css";

const PasswordGenerator = () => {
  return (
    <div className="wrapper">
      <header>
        <h1>Password Generator</h1>
      </header>
      <div className="card">
        <div className="card-header">
          <h2>Generate a Password</h2>
        </div>
        <div className="card-body">
          <textarea
            readOnly
            id="password"
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          ></textarea>
        </div>
        <div className="card-footer">
          <button id="generate" className="btn">
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
