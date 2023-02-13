import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export function PasswordGenerator() {
  const [password, setPassword] = useState("");

  function generatePassword() {
    let charnumber = window.prompt("Enter how many characters 8-120");
    if (!charnumber || charnumber < 8 || charnumber > 120) {
      return generatePassword();
    }
    let lowercase = window.confirm("Would you like lowercase?");
    let uppercase = window.confirm("Would you like uppercase?");
    let numbers = window.confirm("Would you like numbers?");
    let special = window.confirm("Would you like special characters?");
    let randochar = "";
    if (lowercase) {
      randochar += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
      randochar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numbers) {
      randochar += "0123456789";
    }
    if (special) {
      randochar += "!@#$%^&*(/?";
    }

    let generatedPassword = "";
    for (let i = 0; i < charnumber; i++) {
      generatedPassword += randochar.charAt(
        Math.floor(Math.random() * randochar.length)
      );
    }

    return generatedPassword;
  }

  function writePassword() {
    let generatedPassword = generatePassword();
    setPassword(generatedPassword);
  }

  return (
    <Container fluid>
      <Card>
        <Card.Header>
          <h1>Password Generator</h1>
        </Card.Header>
        <Card.Title>
          <h2>Generate a Password</h2>
        </Card.Title>
        <Card.Body>
          <textarea
            readOnly
            value={password}
            placeholder="Your Secure Password"
            aria-label="Generated Password"
          />
        </Card.Body>
        <Button id="generate" className="btn" onClick={writePassword}>
          Generate Password
        </Button>
      </Card>
    </Container>
  );
}
