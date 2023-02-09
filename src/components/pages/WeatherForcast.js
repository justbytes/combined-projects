import React, { useState, useEffect } from "react";
import axios from "axios";
//Import React Bootstrap components
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
//Get dotenv api key and url

import { API_KEY } from "../../secret";

export function WeatherForcast() {
  const [weatherData, setWeatherData] = useState("");
  const [cityName, setCityName] = useState("");
  console.log(process.env);
  const handleSearchClick = async () => {
    const cityName = document.querySelector(`.cityName`).value;
    setCityName(cityName);
    console.log(cityName);
    const weatherData = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
    ).then((res) => {
      console.log(res.data);
    });
    setCityName(cityName);
    setWeatherData(weatherData);
    console.log(cityName);
    console.log(weatherData);
  };

  return (
    <Container>
      <header>
        <h1 className="display-3">Weather Forcast</h1>
        <p className="lead">Check the weather in your local area!</p>
      </header>
      <Form>
        <Row className="align-items-center">
          <Col sm={3} className="my-1">
            <Form.Control
              id="inlineFormInputName"
              className="cityName"
              placeholder="City Name"
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button
              variant="primary"
              type="button"
              onClick={() => handleSearchClick()}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Card border="info" style={{ width: "30rem", height: "20rem" }}>
        <Card.Body>
          <Card.Title>Current Weather</Card.Title>
          <div id="currentForcast"></div>
        </Card.Body>
      </Card>
      <Card border="info" style={{ width: "30rem", height: "20rem" }}>
        <Card.Body>
          <div id="fiveDayForcast"></div>
        </Card.Body>
      </Card>
    </Container>
  );
}
