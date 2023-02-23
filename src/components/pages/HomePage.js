import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";

import "../../style/HomePage.css";

export function HomePage() {
  return (
    <>
      <div className="header-border">
        <div className="header">
          <h1 className="header-title">COMBINED PROJECTS</h1>
          <p className="lead">Hello There!</p>
        </div>
      </div>
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center">
          <Card className="about-card">
            <Card.Header className="about-card-header">
              About this project
            </Card.Header>
            <Card.Body>
              <Card.Text>
                After attending UCSD's Coding Bootcamp I was left with several
                projects that required some refactoring. React is my favorite
                front-end framework so I decided to throw all these projects
                into a single user-friendly and well polished React App. There
                are some projects that didn't fit the metaphorical bill but you
                can still check them out on my Github if your interested.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Row className="the-projects">
            <h1>The Projects</h1>
          </Row>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Accordion className="projects" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Password Generator</Accordion.Header>
              <Accordion.Body>
                With options to include character length, uppercase and
                lowercase letters, numbers, and special characters, this tool
                can generate strong and unique passwords that can slow down even
                the most determined attackers. While it may not stop Mr. Robot,
                it can definitely boost your online security.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Workday Scheduler</Accordion.Header>
              <Accordion.Body>
                A scheduling app that enables users to plan out their day with
                ease by saving their schedule to local storage. It offers a
                user-friendly color-coded system, highlighting the current,
                upcoming, and past hours for maximum organization.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Weather Forecast</Accordion.Header>
              <Accordion.Body>
                User-friendly weather forecast app that provides both current
                and 5-day forecasts. Stay on top of the weather and plan your
                day with confidence and never be caught off guard by the weather
                again.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>React Quiz</Accordion.Header>
              <Accordion.Body>
                A 10 question quiz on the React framework. You'll have 45
                seconds to complete the quiz and your score will shown at the
                end.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>
    </>
  );
}
