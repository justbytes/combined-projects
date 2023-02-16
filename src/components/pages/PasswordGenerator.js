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
  const [password, setPassword] = useState("");

  function generatePassword() {
    //Empty variable that will contain users params for their password
    let randochar = "";
    let generatedPassword = "";

    //Prompt user for password params
    let charnumber = window.prompt("Enter how many characters 8-120");
    //Conditional that requires user to put in correct ammount of characters
    if (!charnumber || charnumber < 8 || charnumber > 120) {
      return generatePassword();
    }
    let lowercase = window.confirm("Would you like lowercase?");
    let uppercase = window.confirm("Would you like uppercase?");
    let numbers = window.confirm("Would you like numbers?");
    let special = window.confirm("Would you like special characters?");

    //Add all user params to randochar variable
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

    //Loop through params and generate random password
    for (let i = 0; i < charnumber; i++) {
      generatedPassword += randochar.charAt(
        Math.floor(Math.random() * randochar.length)
      );
    }
    return generatedPassword;
  }

  //Set password to generate password variable
  function writePassword() {
    let generatedPassword = generatePassword();
    setPassword(generatedPassword);
  }

  return (
    <Container fluid>
      <header className="jumbotron">
        <h1 className="display-3">Password Generator</h1>
        <p className="lead">
          This won't stop Mr. Robot but it will slow him down.
        </p>
      </header>
      <Card>
        <Card.Header>Generate a secure password</Card.Header>
        <Card.Body>
          <Form.Control
            as="textarea"
            value={password}
            rows={3}
            placeholder="Your Secure Password"
            aria-label="Generated Password"
            readOnly
          />
        </Card.Body>
        <Button id="generate" className="btn" onClick={writePassword}>
          Generate Password
        </Button>
      </Card>
    </Container>
  );
}
