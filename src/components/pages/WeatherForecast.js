import React, { useEffect, useState } from "react";

//Import api's
import axios from "axios";
import moment from "moment";

//Import React Bootstrap components
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Get api key from secret.js
import { API_KEY } from "../../secret";

//Import style
import "../../style/WeatherForcast.css";

export function WeatherForecast() {
  //Set state variables
  const [cityName, setCityName] = useState("San Diego");
  const [stateName, setStateName] = useState("CA");
  const [currentWeatherForecast, setCurrentWeatherForecast] = useState({});
  const [weatherForecastData, setWeatherForecastData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      //Set city and state to local variable
      const city = cityName;
      const state = stateName;
      if (!city) return;
      //API Calls
      try {
        //Gets long and lat from searched city and state
        const current = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&units=imperial&appid=${API_KEY}`
        );
        //Sets the current weather forecast
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
        //Set lon and lat for 5 day forecast api call
        let lat = current.data.coord.lat;
        let lon = current.data.coord.lon;
        const forecast = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
        );
        //Set 5 day forecast weather data
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
  }, [cityName, stateName]);

  //Get city and state values for api call
  const handleSearch = () => {
    setCityName(document.querySelector(`.cityName`).value);
    setStateName(document.querySelector(`.stateName`).value);
  };

  return (
    <>
      <div className="header-border">
        <div className="header">
          <h1 className="header-title">Weather Forecast</h1>
          <p className="lead">
            Forecast for {cityName}, {stateName}.
          </p>
        </div>
      </div>
      <Container fluid>
        <div className="weather-background ">
          {/* Search city name and state code to get forecast */}
          <div className="search-div">
            <Form>
              <Row className="search-field">
                <Col sm={3} className="my-1">
                  <Form.Label
                    htmlFor="inlineFormInputName"
                    visuallyHidden
                  ></Form.Label>
                  <Form.Control
                    id="inlineFormInputName"
                    className="cityName"
                    placeholder="San Diego"
                  />
                </Col>
                <Col sm={3} className="my-1">
                  <Form.Label
                    htmlFor="inlineFormInputGroupUsername"
                    visuallyHidden
                  ></Form.Label>
                  <InputGroup>
                    <Form.Control
                      id="inlineFormInputGroupUsername"
                      className="stateName"
                      placeholder="CA"
                    />
                  </InputGroup>
                </Col>
                <Col xs="auto" className="my-1">
                  <Button
                    className="search-location-btn"
                    onClick={() => handleSearch()}
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="weather-div">
            {/* Displays current weather conditions */}

            <div className="current-day-div">
              <h1 className="current-day-title">Todays Weather</h1>
              <Card className="current-day-card">
                <Card.Header>
                  {moment(currentWeatherForecast.date).format("MM/DD/YYYY")}
                </Card.Header>
                <Card.Title>
                  <strong className="card-description">
                    {currentWeatherForecast.description}
                  </strong>{" "}
                  <br />
                  <img
                    src={`http://openweathermap.org/img/wn/${currentWeatherForecast.icon}@2x.png`}
                    alt="Weather icon"
                  />
                </Card.Title>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Actual Temp:</strong>{" "}
                      {currentWeatherForecast.temp + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Feels Like Temp:</strong>{" "}
                      {currentWeatherForecast.feelsLike + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Humidity:</strong>{" "}
                      {currentWeatherForecast.humidity + "%"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Max Temp:</strong>{" "}
                      {currentWeatherForecast.tempMax + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Min Temp:</strong>{" "}
                      {currentWeatherForecast.tempMin + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Speed:</strong>{" "}
                      {currentWeatherForecast.windSpeed + " mph"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Direction:</strong>{" "}
                      {currentWeatherForecast.windDirection + "°"}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
            <div className="five-day-div">
              <h1 className="five-day-title">Five Day Forecast</h1>
              {/* Displays day 1 of 5 day forecast */}
              <Card className="dayOneForecast">
                <Card.Header>
                  {moment(weatherForecastData.date0).format("MM/DD/YYYY")}
                </Card.Header>
                <Card.Title>
                  <strong className="card-description">
                    {weatherForecastData.description0}
                  </strong>{" "}
                  <br />
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherForecastData.icon0}@2x.png`}
                    alt="Weather icon"
                  />
                </Card.Title>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Actual Temp:</strong>{" "}
                      {weatherForecastData.temp0 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Feels Like Temp:</strong>{" "}
                      {weatherForecastData.feelsLike0 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Humidity:</strong>{" "}
                      {weatherForecastData.humidity0 + "%"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Max Temp:</strong>{" "}
                      {weatherForecastData.tempMax0 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Min Temp:</strong>{" "}
                      {weatherForecastData.tempMin0 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Speed:</strong>{" "}
                      {weatherForecastData.windSpeed0 + " mph"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Direction:</strong>{" "}
                      {weatherForecastData.windDirection0 + "°"}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              {/* Displays day 2 of 5 day forecast */}
              <Card className="dayTwoForecast">
                <Card.Header>
                  {moment(weatherForecastData.date1).format("MM/DD/YYYY")}
                </Card.Header>
                <Card.Title>
                  <strong className="card-description">
                    {weatherForecastData.description1}
                  </strong>{" "}
                  <br />
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherForecastData.icon1}@2x.png`}
                    alt="Weather icon"
                  />
                </Card.Title>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Actual Temp:</strong>{" "}
                      {weatherForecastData.temp1 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Feels Like Temp:</strong>{" "}
                      {weatherForecastData.feelsLike1 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Humidity:</strong>{" "}
                      {weatherForecastData.humidity1 + "%"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Max Temp:</strong>{" "}
                      {weatherForecastData.tempMax1 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Min Temp:</strong>{" "}
                      {weatherForecastData.tempMin1 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Speed:</strong>{" "}
                      {weatherForecastData.windSpeed1 + " mph"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Direction:</strong>{" "}
                      {weatherForecastData.windDirection1 + "°"}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              {/* Displays day 3 of 5 day forecast */}
              <Card className="dayThreeForecast">
                <Card.Header>
                  {moment(weatherForecastData.date2).format("MM/DD/YYYY")}
                </Card.Header>
                <Card.Title>
                  <strong className="card-description">
                    {weatherForecastData.description2}
                  </strong>{" "}
                  <br />
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherForecastData.icon2}@2x.png`}
                    alt="Weather icon"
                  />
                </Card.Title>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Actual Temp:</strong>{" "}
                      {weatherForecastData.temp2 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Feels Like Temp:</strong>{" "}
                      {weatherForecastData.feelsLike2 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Humidity:</strong>{" "}
                      {weatherForecastData.humidity2 + "%"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Max Temp:</strong>{" "}
                      {weatherForecastData.tempMax2 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Min Temp:</strong>{" "}
                      {weatherForecastData.tempMin2 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Speed:</strong>{" "}
                      {weatherForecastData.windSpeed2 + " mph"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Direction:</strong>{" "}
                      {weatherForecastData.windDirection2 + "°"}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              {/* Displays day 4 of 5 day forecast */}
              <Card className="dayFourForecast">
                <Card.Header>
                  {moment(weatherForecastData.date3).format("MM/DD/YYYY")}
                </Card.Header>
                <Card.Title>
                  <strong className="card-description">
                    {weatherForecastData.description3}
                  </strong>{" "}
                  <br />
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherForecastData.icon3}@2x.png`}
                    alt="Weather icon"
                  />
                </Card.Title>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Actual Temp:</strong>{" "}
                      {weatherForecastData.temp3 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Feels Like Temp:</strong>{" "}
                      {weatherForecastData.feelsLike3 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Humidity:</strong>{" "}
                      {weatherForecastData.humidity3 + "%"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Max Temp:</strong>{" "}
                      {weatherForecastData.tempMax3 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Min Temp:</strong>{" "}
                      {weatherForecastData.tempMin3 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Speed:</strong>{" "}
                      {weatherForecastData.windSpeed3 + " mph"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Direction:</strong>{" "}
                      {weatherForecastData.windDirection3 + "°"}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              {/* Displays day 5 of 5 day forecast */}
              <Card className="dayFiveForecast">
                <Card.Header>
                  {moment(weatherForecastData.date4).format("MM/DD/YYYY")}
                </Card.Header>
                <Card.Title>
                  <strong className="card-description">
                    {weatherForecastData.description4}
                  </strong>{" "}
                  <br />
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherForecastData.icon4}@2x.png`}
                    alt="Weather icon"
                  />
                </Card.Title>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <strong>Actual Temp:</strong>{" "}
                      {weatherForecastData.temp4 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Feels Like Temp:</strong>{" "}
                      {weatherForecastData.feelsLike4 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Humidity:</strong>{" "}
                      {weatherForecastData.humidity4 + "%"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Max Temp:</strong>{" "}
                      {weatherForecastData.tempMax4 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Min Temp:</strong>{" "}
                      {weatherForecastData.tempMin3 + " °F"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Speed:</strong>{" "}
                      {weatherForecastData.windSpeed4 + " mph"}
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <strong>Wind Direction:</strong>{" "}
                      {weatherForecastData.windDirection4 + "°"}
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
