import React, { useState } from "react";

//Import react bootstrap components
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//Import style
import "../../style/PasswordGenerator.css";

export function PasswordGenerator() {
  //Set state variables
  const [passwordLength, setPasswordLength] = useState(32);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setSpecialCharacters] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    //Empty variable to input password characters
    let passwordCharacters = "";
    let generatedPassword = "";

    //Check for truthiness and add characters to passwordCharacters
    if (uppercase) passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) passwordCharacters += "0123456789";
    if (specialCharacters) passwordCharacters += "!@#$%^&*(/?";

    //Generate random password
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += passwordCharacters.charAt(
        Math.floor(Math.random() * passwordCharacters.length)
      );
    }
    setPassword(generatedPassword);
  };
  //Get lenght of password
  const handleRangeChange = (event) => {
    setPasswordLength(event.target.value);
  };

  return (
    <>
      <div className="header-border">
        <div className="header">
          <h1 className="header-title">Password Generator</h1>
          <p className="lead">
            This won't stop Mr. Robot but it will slow him down.
          </p>
        </div>
      </div>
      <Container fluid>
        <div className="password-gen-background d-flex justify-content-center align-items-center">
          <div className="password-gen-div d-flex justify-content-center align-items-center">
            <Card className="password-gen-card">
              <Card.Header className="password-gen-card-header">
                Generate a secure password
              </Card.Header>
              <Card.Body>
                <Form.Control
                  as="textarea"
                  value={password}
                  rows={3}
                  placeholder="Your Secure Password"
                  aria-label="Generated Password"
                  readOnly
                />

                <Form.Range
                  className="password-options"
                  min="8"
                  max="120"
                  step="1"
                  value={passwordLength}
                  onInput={handleRangeChange}
                />
                <Form.Label>Password length: {passwordLength}</Form.Label>
                <Form.Check
                  type="checkbox"
                  label="Uppercase"
                  checked={uppercase}
                  onChange={(e) => setUppercase(e.target.checked)}
                />
                <Form.Check
                  type="checkbox"
                  label="Lowercase"
                  checked={lowercase}
                  onChange={(e) => setLowercase(e.target.checked)}
                />
                <Form.Check
                  type="checkbox"
                  label="Numbers"
                  checked={numbers}
                  onChange={(e) => setNumbers(e.target.checked)}
                />
                <Form.Check
                  type="checkbox"
                  label="Special Characters"
                  checked={specialCharacters}
                  onChange={(e) => setSpecialCharacters(e.target.checked)}
                />
              </Card.Body>
              <Button
                id="generate"
                className="btn generate-button"
                onClick={generatePassword}
              >
                Generate Password
              </Button>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}
