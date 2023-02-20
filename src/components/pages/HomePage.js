import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

import "../../style/HomePage.css";

export function HomePage() {
  return (
    <>
      <div className="header-border">
        <div className="header">
          <h1>Combined Projects</h1>
          <p className="lead">Hello There!</p>
        </div>
      </div>
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center">
          <Card className="about-card">
            <Card.Header as="h5">About this project</Card.Header>
            <Card.Body>
              <Card.Text>
                After attending UCSD's Coding Bootcamp I was left with several
                projects that required some refactoring. React is my favorite
                frameworks so I decided to throw all these projects into one
                mobile responsive, user-friendly and well polished React App.
                There are some projects that didn't fit the metaphorical bill
                but you can still check them out on my Github if your
                interested.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <h1>The Projects</h1>
        <div className="card-wrapper">
          <Card
            bg="secondary"
            text="light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Password Generator</Card.Header>
            <Card.Body>
              <Card.Text>
                With options to include character length, uppercase and
                lowercase letters, numbers, and special characters, this tool
                can generate strong and unique passwords that can slow down even
                the most determined attackers. While it may not stop Mr. Robot,
                it can definitely boost your online security.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg="secondary"
            text="light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Workday Scheduler</Card.Header>
            <Card.Body>
              <Card.Text>
                A scheduling app that enables users to plan out their day with
                ease by saving their schedule to local storage. It offers a
                user-friendly color-coded system, highlighting the current,
                upcoming, and past hours for maximum organization.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg="secondary"
            text="light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Weather Forecast</Card.Header>
            <Card.Body>
              <Card.Text>
                User-friendly weather forecast app that provides both current
                and 5-day forecasts. Stay on top of the weather and plan your
                day with confidence and never be caught off guard by the weather
                again.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card
            bg="secondary"
            text="light"
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>React Quiz</Card.Header>
            <Card.Body>
              <Card.Text>
                A 10 question quiz on the React framework. You'll have 45
                seconds to complete the quiz and your score will shown at the
                end.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
}
