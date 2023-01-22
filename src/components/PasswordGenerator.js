import React, { useState } from "react";

import "../style/PasswordGenerator.css";

const PasswordGenerator = () => {
  // var generateBtn = document.querySelector("#generate");

  function generatePassword() {
    var password = "";

    var charnumber = window.prompt("Enter how many characters 8-120");
    if (!charnumber || charnumber < 8 || charnumber > 120) {
      return generatePassword();
    }
    var lowercase = window.confirm("Would you like lowercase?");
    var uppercase = window.confirm("Would you like uppercase?");
    var number = window.confirm("Would you like numbers?");
    var special = window.confirm("Would you like special characters?");
    var randochar = "";
    if (lowercase == true) {
      randochar = randochar + "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase == true) {
      randochar = randochar + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (number == true) {
      randochar = randochar + "0123456789";
    }
    if (special == true) {
      randochar = randochar + "!@#$%^&*(/?";
    }

    for (var i = 0; i < charnumber; i++) {
      password += randochar.charAt(
        Math.floor(Math.random() * randochar.length)
      );
    }

    return password;
  }

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

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
          <button id="generate" className="btn" onClick={writePassword}>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
