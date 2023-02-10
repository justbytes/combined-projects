import React, { useEffect, useState } from "react";
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

export function WeatherForecast() {
  const [weatherData, setWeatherData] = useState({});
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const city = cityName;
      if (!city) return;

      try {
        //Gets long and lat
        const coords = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        let lat = coords.data.coord.lat;
        let lon = coords.data.coord.lon;
        //Fetches forecast using long and lat coordinates
        const forecast = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );
        console.log(forecast.data);
        setWeatherData({
          icon: forecast.data.list[0].weather[0].icon,
          description: forecast.data.list[0].weather[0].description,
          temp: forecast.data.list[0].main.temp,
          feelsLike: forecast.data.list[0].main.feels_like,
          tempMin: forecast.data.list[0].main.temp_min,
          tempMax: forecast.data.list[0].main.temp_max,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cityName]);

  console.log(weatherData);

  const handleSearch = () => {
    setCityName(document.querySelector(`.cityName`).value);
  };

  return (
    <Container fluid>
      <header>
        <h1 className="display-3">Weather forecast</h1>
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
              onClick={() => handleSearch()}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Card border="info" style={{ width: "30rem", height: "20rem" }}>
        <Card.Title>{cityName.toUpperCase() + " FORECAST"}</Card.Title>
        <Card.Body>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
            alt="Weather icon"
          />
          <p>{weatherData.description}</p>
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

          <div id="currentforecast"></div>
        </Card.Body>
      </Card>
    </Container>
  );
}
