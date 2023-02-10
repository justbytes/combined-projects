import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

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
  const [cityName, setCityName] = useState("San Diego");

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
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
        );
        console.log(forecast.data);
        setWeatherData({
          //Gets current weather forecast data
          date: forecast.data.list[4].dt_txt,
          icon: forecast.data.list[4].weather[0].icon,
          description: forecast.data.list[4].weather[0].description,
          temp: forecast.data.list[4].main.temp,
          feelsLike: forecast.data.list[4].main.feels_like,
          humidity: forecast.data.list[4].main.humidity,
          uvi: forecast.data.list[4].uvi,
          tempMin: forecast.data.list[4].main.temp_min,
          tempMax: forecast.data.list[4].main.temp_max,
          windSpeed: forecast.data.list[4].wind.speed,
          windDirection: forecast.data.list[4].wind.deg,

          //Gets 1st day weather data out of 5 day forecast
          date1: forecast.data.list[12].dt_txt,
          icon1: forecast.data.list[12].weather[0].icon,
          description1: forecast.data.list[12].weather[0].description,
          temp1: forecast.data.list[12].main.temp,
          feelsLike1: forecast.data.list[12].main.feels_like,
          humidity1: forecast.data.list[12].main.humidity,
          tempMin1: forecast.data.list[12].main.temp_min,
          tempMax1: forecast.data.list[12].main.temp_max,
          windSpeed1: forecast.data.list[12].wind.speed,
          windDirection1: forecast.data.list[12].wind.deg,
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
      <Card border="info" style={{ width: "100%" }}>
        <Card.Title>{cityName.toUpperCase() + " FORECAST"}</Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <p>
              <strong>Date:</strong>{" "}
              {moment(weatherData.date).format("MM/DD/YYYY")}{" "}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="Weather icon"
            />
            <p>
              <strong>{weatherData.description}</strong>
            </p>
            <p>
              <strong>Actual Temp:</strong> {weatherData.temp}
            </p>
            <p>
              <strong>Feels Like Temp:</strong> {weatherData.feelsLike}
            </p>
            <p>
              <strong>Humidity:</strong> {weatherData.humidity + "%"}
            </p>
            <p>
              <strong>Max Temp:</strong> {weatherData.tempMax}
            </p>
            <p>
              <strong>Min Temp:</strong> {weatherData.tempMin}
            </p>
            <p>
              <strong>Wind Speed:</strong> {weatherData.windSpeed + " mph"}
            </p>
            <p>
              <strong>Wind Direction:</strong> {weatherData.windDirection + "°"}
            </p>
          </Col>
        </Card.Body>
      </Card>
      <Card border="info" style={{ width: "100%" }}>
        <Card.Title>
          {moment(weatherData.date1).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <img
              src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
              alt="Weather icon"
            />
            <p>
              <strong>{weatherData.description1}</strong>
            </p>
            <p>
              <strong>Actual Temp:</strong> {weatherData.temp1}
            </p>
            <p>
              <strong>Feels Like Temp:</strong> {weatherData.feelsLike1}
            </p>
            <p>
              <strong>Humidity:</strong> {weatherData.humidity1 + "%"}
            </p>
            <p>
              <strong>Max Temp:</strong> {weatherData.tempMax1}
            </p>
            <p>
              <strong>Min Temp:</strong> {weatherData.tempMin1}
            </p>
            <p>
              <strong>Wind Speed:</strong> {weatherData.windSpeed1 + " mph"}
            </p>
            <p>
              <strong>Wind Direction:</strong>{" "}
              {weatherData.windDirection1 + "°"}
            </p>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  );
}
