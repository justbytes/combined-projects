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
  const [currentWeatherForecast, setCurrentWeatherForecast] = useState({});
  const [weatherForecastData, setWeatherForecastData] = useState({});
  const [cityName, setCityName] = useState("San Diego");

  useEffect(() => {
    const fetchData = async () => {
      const city = cityName;
      if (!city) return;

      try {
        //Gets long and lat
        const current = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`
        );
        setCurrentWeatherForecast({
          date: current.data.dt_txt,
          icon: current.data.weather[0].icon,
          description: current.data.weather[0].description,
          temp: current.data.main.temp,
          feelsLike: current.data.main.feels_like,
          humidity: current.data.main.humidity,
          uvi: current.data.uvi,
          tempMin: current.data.main.temp_min,
          tempMax: current.data.main.temp_max,
          windSpeed: current.data.wind.speed,
          windDirection: current.data.wind.deg,
        });
        let lat = current.data.coord.lat;
        let lon = current.data.coord.lon;
        //Fetches forecast using long and lat coordinates
        const forecast = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
        );
        console.log(forecast.data);
        setWeatherForecastData({
          //Gets 1st day weather data out of 5 day forecast
          date0: forecast.data.list[4].dt_txt,
          icon0: forecast.data.list[4].weather[0].icon,
          description0: forecast.data.list[4].weather[0].description,
          temp0: forecast.data.list[4].main.temp,
          feelsLike0: forecast.data.list[4].main.feels_like,
          humidity0: forecast.data.list[4].main.humidity,
          uvi0: forecast.data.list[4].uvi,
          tempMin0: forecast.data.list[4].main.temp_min,
          tempMax0: forecast.data.list[4].main.temp_max,
          windSpeed0: forecast.data.list[4].wind.speed,
          windDirection0: forecast.data.list[4].wind.deg,

          //Gets 2nd day weather data out of 5 day forecast
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

          //Gets 3rd day weather data out of 5 day forecast
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

          //Gets 4th day weather data out of 5 day forecast
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

          //Gets 5th day weather data out of 5 day forecast
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
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cityName]);

  console.log(weatherForecastData);

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
        <Card.Title>
          {moment(currentWeatherForecast.date).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${currentWeatherForecast.icon}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{currentWeatherForecast.description}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong>{" "}
                {currentWeatherForecast.temp + " °F"}
              </li>
              <li>
                <strong>Feels Like Temp:</strong>{" "}
                {currentWeatherForecast.feelsLike + " °F"}
              </li>
              <li>
                <strong>Humidity:</strong>{" "}
                {currentWeatherForecast.humidity + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong>{" "}
                {currentWeatherForecast.tempMax + " °F"}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong>{" "}
                {currentWeatherForecast.tempMin + " °F"}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong>{" "}
                {currentWeatherForecast.windSpeed + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {currentWeatherForecast.windDirection + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
      <Card border="info" className="dayOneForecast" style={{ width: "100%" }}>
        <Card.Title>
          {moment(weatherForecastData.date0).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherForecastData.icon0}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherForecastData.description0}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong>{" "}
                {weatherForecastData.temp0 + " °F"}
              </li>
              <li>
                <strong>Feels Like Temp:</strong>{" "}
                {weatherForecastData.feelsLike0 + " °F"}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherForecastData.humidity0 + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong>{" "}
                {weatherForecastData.tempMax0 + " °F"}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong>{" "}
                {weatherForecastData.tempMin0 + " °F"}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong>{" "}
                {weatherForecastData.windSpeed0 + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherForecastData.windDirection0 + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
      <Card border="info" className="dayTwoForecast" style={{ width: "100%" }}>
        <Card.Title>
          {moment(weatherForecastData.date1).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherForecastData.icon1}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherForecastData.description1}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong>{" "}
                {weatherForecastData.temp1 + " °F"}
              </li>
              <li>
                <strong>Feels Like Temp:</strong>{" "}
                {weatherForecastData.feelsLike1 + " °F"}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherForecastData.humidity1 + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong>{" "}
                {weatherForecastData.tempMax1 + " °F"}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong>{" "}
                {weatherForecastData.tempMin1 + " °F"}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong>{" "}
                {weatherForecastData.windSpeed1 + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherForecastData.windDirection1 + "°"}
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
          {moment(weatherForecastData.date2).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherForecastData.icon2}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherForecastData.description2}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong>{" "}
                {weatherForecastData.temp2 + " °F"}
              </li>
              <li>
                <strong>Feels Like Temp:</strong>{" "}
                {weatherForecastData.feelsLike2 + " °F"}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherForecastData.humidity2 + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong>{" "}
                {weatherForecastData.tempMax2 + " °F"}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong>{" "}
                {weatherForecastData.tempMin2 + " °F"}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong>{" "}
                {weatherForecastData.windSpeed2 + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherForecastData.windDirection2 + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
      <Card border="info" className="dayFourForecast" style={{ width: "100%" }}>
        <Card.Title>
          {moment(weatherForecastData.date3).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherForecastData.icon3}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherForecastData.description3}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong>{" "}
                {weatherForecastData.temp3 + " °F"}
              </li>
              <li>
                <strong>Feels Like Temp:</strong>{" "}
                {weatherForecastData.feelsLike3 + " °F"}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherForecastData.humidity3 + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong>{" "}
                {weatherForecastData.tempMax3 + " °F"}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong>{" "}
                {weatherForecastData.tempMin3 + " °F"}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong>{" "}
                {weatherForecastData.windSpeed3 + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherForecastData.windDirection3 + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
      <Card border="info" className="dayFiveForecast" style={{ width: "100%" }}>
        <Card.Title>
          {moment(weatherForecastData.date4).format("MM/DD/YYYY")}
        </Card.Title>
        <Card.Body style={{ minHeight: "10rem" }}>
          <Col>
            <div>
              <img
                src={`http://openweathermap.org/img/wn/${weatherForecastData.icon4}@2x.png`}
                alt="Weather icon"
              />
              <p>
                <strong>{weatherForecastData.description4}</strong>
              </p>
            </div>
            <ul>
              <li>
                <strong>Actual Temp:</strong>{" "}
                {weatherForecastData.temp4 + " °F"}
              </li>
              <li>
                <strong>Feels Like Temp:</strong>{" "}
                {weatherForecastData.feelsLike4 + " °F"}
              </li>
              <li>
                <strong>Humidity:</strong> {weatherForecastData.humidity4 + "%"}
              </li>
              <li>
                <strong>Max Temp:</strong>{" "}
                {weatherForecastData.tempMax4 + " °F"}
              </li>
              <li>
                {" "}
                <strong>Min Temp:</strong>{" "}
                {weatherForecastData.tempMin4 + " °F"}
              </li>
              <li>
                <strong></strong>
                <strong>Wind Speed:</strong>{" "}
                {weatherForecastData.windSpeed4 + " mph"}
              </li>
              <li>
                <strong>Wind Direction:</strong>{" "}
                {weatherForecastData.windDirection4 + "°"}
              </li>
            </ul>
          </Col>
        </Card.Body>
      </Card>
    </Container>
  );
}
