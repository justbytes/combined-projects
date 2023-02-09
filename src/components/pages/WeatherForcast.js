import React, { useState } from "react";
import axios from "axios";

//Import React Bootstrap components
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

//Get api key from secret.js
import { API_KEY } from "../../secret";

export function WeatherForcast() {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("");
  //When search button clicks fetches cities forcast
  const fetchWeather = async () => {
    const cityName = await document.querySelector(`.cityName`).value;
    setCityName(cityName);

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      )
      .then((res) => {
        console.log(res.data);
        setWeatherData({
          temp: res.data.main.temp,
          feelsLike: res.data.main.feels_like,
          tempMin: res.data.main.temp_min,
          tempMax: res.data.main.temp_max,
        });
      })
      .catch((err) => {
        console.log(err);
      });
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
              onClick={() => fetchWeather()}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Card border="info" style={{ width: "30rem", height: "20rem" }}>
        <Card.Body>
          <Card.Title>Current Weather for {cityName.toUpperCase()}</Card.Title>
          <p>
            Actual Temp: {((weatherData.temp - 273.15) * 1.8 + 32).toFixed(2)}
          </p>
          <p>
            Feels Like Temp:{" "}
            {((weatherData.feelsLike - 273.15) * 1.8 + 32).toFixed(2)}
          </p>
          <p>
            Max Temp: {((weatherData.tempMax - 273.15) * 1.8 + 32).toFixed(2)}
          </p>
          <p>
            Min Temp: {((weatherData.tempMin - 273.15) * 1.8 + 32).toFixed(2)}
          </p>

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
