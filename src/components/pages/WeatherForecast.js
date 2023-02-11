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

          //Gets 2nd day weather data out of 5 day forecast
          date2: forecast.data.list[20].dt_txt,
          icon2: forecast.data.list[20].weather[0].icon,
          description2: forecast.data.list[20].weather[0].description,
          temp2: forecast.data.list[20].main.temp,
          feelsLike2: forecast.data.list[20].main.feels_like,
          humidity2: forecast.data.list[20].main.humidity,
          tempMin2: forecast.data.list[20].main.temp_min,
          tempMax2: forecast.data.list[20].main.temp_max,
          windSpeed2: forecast.data.list[20].wind.speed,
          windDirection2: forecast.data.list[20].wind.deg,

          //Gets 3rd day weather data out of 5 day forecast
          date3: forecast.data.list[28].dt_txt,
          icon3: forecast.data.list[28].weather[0].icon,
          description3: forecast.data.list[28].weather[0].description,
          temp3: forecast.data.list[28].main.temp,
          feelsLike3: forecast.data.list[28].main.feels_like,
          humidity3: forecast.data.list[28].main.humidity,
          tempMin3: forecast.data.list[28].main.temp_min,
          tempMax3: forecast.data.list[28].main.temp_max,
          windSpeed3: forecast.data.list[28].wind.speed,
          windDirection3: forecast.data.list[28].wind.deg,

          //Gets 4th day weather data out of 5 day forecast
          date4: forecast.data.list[36].dt_txt,
          icon4: forecast.data.list[36].weather[0].icon,
          description4: forecast.data.list[36].weather[0].description,
          temp4: forecast.data.list[36].main.temp,
          feelsLike4: forecast.data.list[36].main.feels_like,
          humidity4: forecast.data.list[36].main.humidity,
          tempMin4: forecast.data.list[36].main.temp_min,
          tempMax4: forecast.data.list[36].main.temp_max,
          windSpeed4: forecast.data.list[36].wind.speed,
          windDirection4: forecast.data.list[36].wind.deg,

          //Gets 5th day weather data out of 5 day forecast
          date5: forecast.data.list[39].dt_txt,
          icon5: forecast.data.list[39].weather[0].icon,
          description5: forecast.data.list[39].weather[0].description,
          temp5: forecast.data.list[39].main.temp,
          feelsLike5: forecast.data.list[39].main.feels_like,
          humidity5: forecast.data.list[39].main.humidity,
          tempMin5: forecast.data.list[39].main.temp_min,
          tempMax5: forecast.data.list[39].main.temp_max,
          windSpeed5: forecast.data.list[39].wind.speed,
          windDirection5: forecast.data.list[39].wind.deg,
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
      <Card
        border="info"
        className="currentDayForecast"
        style={{ width: "100%" }}
      >
        <Card.Title>{moment(weatherData.date).format("MM/DD/YYYY")}</Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherData.description}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong> {weatherData.temp}
              </li>
              <li>
                <strong>Feels Like Temp:</strong> {weatherData.feelsLike}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherData.humidity + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong> {weatherData.tempMax}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong> {weatherData.tempMin}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong> {weatherData.windSpeed + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherData.windDirection + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
      <Card border="info" className="dayOneForecast" style={{ width: "100%" }}>
        <Card.Title>
          {moment(weatherData.date1).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon1}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherData.description1}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong> {weatherData.temp1}
              </li>
              <li>
                <strong>Feels Like Temp:</strong> {weatherData.feelsLike1}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherData.humidity1 + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong> {weatherData.tempMax1}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong> {weatherData.tempMin1}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong> {weatherData.windSpeed1 + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherData.windDirection1 + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
      <Card border="info" className="dayTwoForecast" style={{ width: "100%" }}>
        <Card.Title>
          {moment(weatherData.date2).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon2}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherData.description2}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong> {weatherData.temp2}
              </li>
              <li>
                <strong>Feels Like Temp:</strong> {weatherData.feelsLike2}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherData.humidity2 + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong> {weatherData.tempMax2}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong> {weatherData.tempMin2}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong> {weatherData.windSpeed2 + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherData.windDirection2 + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
      <Card
        border="info"
        className="dayThreeForecast"
        style={{ width: "100%" }}
      >
        <Card.Title>
          {moment(weatherData.date3).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon3}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherData.description3}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong> {weatherData.temp3}
              </li>
              <li>
                <strong>Feels Like Temp:</strong> {weatherData.feelsLike3}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherData.humidity3 + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong> {weatherData.tempMax3}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong> {weatherData.tempMin3}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong> {weatherData.windSpeed3 + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherData.windDirection3 + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
      <Card border="info" className="dayFourForecast" style={{ width: "100%" }}>
        <Card.Title>
          {moment(weatherData.date4).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon4}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherData.description4}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong> {weatherData.temp4}
              </li>
              <li>
                <strong>Feels Like Temp:</strong> {weatherData.feelsLike4}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherData.humidity4 + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong> {weatherData.tempMax4}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong> {weatherData.tempMin4}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong> {weatherData.windSpeed4 + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherData.windDirection4 + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
      <Card border="info" className="dayFiveForecast" style={{ width: "100%" }}>
        <Card.Title>
          {moment(weatherData.date5).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon5}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherData.description5}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong> {weatherData.temp5}
              </li>
              <li>
                <strong>Feels Like Temp:</strong> {weatherData.feelsLike5}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherData.humidity5 + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong> {weatherData.tempMax5}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong> {weatherData.tempMin5}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong> {weatherData.windSpeed5 + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherData.windDirection5 + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  );
}
