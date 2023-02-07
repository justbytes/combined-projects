import React, { useState, useEffect } from "react";
import { Alert, Container, Form, Button } from "react-bootstrap";
import moment from "moment";

import "../../style/WorkDayScheduler.css";

export function WorkDayScheduler() {
  const [currentHour, setCurrentHour] = useState(moment().hours());
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const hourUpdater = () => {
      setCurrentHour(moment().hours());
    };
    setInterval(hourUpdater, 15000);
  }, []);

  const handleSaveBtnClick = (time) => {
    const value = document.querySelector(`#${time} .description`).value;
    localStorage.setItem(time, value);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <Container>
      <header className="jumbotron">
        <h1 className="display-3">Work Day Scheduler</h1>
        <p className="lead">
          A simple calendar app for scheduling your work day
        </p>
        <p id="currentDay" className="lead"></p>
      </header>
      {showNotification && (
        <Alert variant="success">Item saved to localStorage</Alert>
      )}
      <h3 id="currentDay">{moment().format("dddd, MMMM Do")}</h3>
      <Form>
        <Form.Group
          className={`time-block ${
            currentHour < 9 ? "future" : currentHour === 9 ? "present" : "past"
          }`}
          id="hour-9"
          controlId="hour-9"
        >
          <div
            className={`time-block ${
              currentHour < 9
                ? "future"
                : currentHour === 9
                ? "present"
                : "past"
            }`}
            id="hour-9"
          >
            9 A.M.
          </div>

          <Form.Control
            as="textarea"
            className="description"
            defaultValue={localStorage.getItem("hour-9")}
          />
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="saveBtn"
              size="lg"
              onClick={() => handleSaveBtnClick("hour-9")}
            >
              Save
            </Button>
          </div>
        </Form.Group>
        <Form.Group
          className={`time-block ${
            currentHour < 10
              ? "future"
              : currentHour === 10
              ? "present"
              : "past"
          }`}
          id="hour-10"
          controlId="hour-10"
        >
          <div
            className={`time-block ${
              currentHour < 10
                ? "future"
                : currentHour === 10
                ? "present"
                : "past"
            }`}
            id="hour-10"
          >
            10 A.M.
          </div>

          <Form.Control
            as="textarea"
            className="description"
            defaultValue={localStorage.getItem("hour-10")}
          />
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="saveBtn"
              size="lg"
              onClick={() => handleSaveBtnClick("hour-10")}
            >
              Save
            </Button>
          </div>
        </Form.Group>
        <Form.Group
          className={`time-block ${
            currentHour < 11
              ? "future"
              : currentHour === 11
              ? "present"
              : "past"
          }`}
          id="hour-11"
          controlId="hour-11"
        >
          <div
            className={`time-block ${
              currentHour < 11
                ? "future"
                : currentHour === 11
                ? "present"
                : "past"
            }`}
            id="hour-9"
          >
            11 A.M.
          </div>

          <Form.Control
            as="textarea"
            className="description"
            defaultValue={localStorage.getItem("hour-11")}
          />
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="saveBtn"
              size="lg"
              onClick={() => handleSaveBtnClick("hour-11")}
            >
              Save
            </Button>
          </div>
        </Form.Group>
        <Form.Group
          className={`time-block ${
            currentHour < 12
              ? "future"
              : currentHour === 12
              ? "present"
              : "past"
          }`}
          id="hour-12"
          controlId="hour-12"
        >
          <div
            className={`time-block ${
              currentHour < 12
                ? "future"
                : currentHour === 12
                ? "present"
                : "past"
            }`}
            id="hour-12"
          >
            12 A.M.
          </div>

          <Form.Control
            as="textarea"
            className="description"
            defaultValue={localStorage.getItem("hour-12")}
          />
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="saveBtn"
              size="lg"
              onClick={() => handleSaveBtnClick("hour-12")}
            >
              Save
            </Button>
          </div>
        </Form.Group>
        <Form.Group
          className={`time-block ${
            currentHour < 13
              ? "future"
              : currentHour === 13
              ? "present"
              : "past"
          }`}
          id="hour-13"
          controlId="hour-13"
        >
          <div
            className={`time-block ${
              currentHour < 13
                ? "future"
                : currentHour === 13
                ? "present"
                : "past"
            }`}
            id="hour-13"
          >
            1 P.M.
          </div>

          <Form.Control
            as="textarea"
            className="description"
            defaultValue={localStorage.getItem("hour-13")}
          />
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="saveBtn"
              size="lg"
              onClick={() => handleSaveBtnClick("hour-13")}
            >
              Save
            </Button>
          </div>
        </Form.Group>
        <Form.Group
          className={`time-block ${
            currentHour < 14
              ? "future"
              : currentHour === 14
              ? "present"
              : "past"
          }`}
          id="hour-14"
          controlId="hour-14"
        >
          <div
            className={`time-block ${
              currentHour < 14
                ? "future"
                : currentHour === 14
                ? "present"
                : "past"
            }`}
            id="hour-14"
          >
            2 P.M.
          </div>

          <Form.Control
            as="textarea"
            className="description"
            defaultValue={localStorage.getItem("hour-14")}
          />
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="saveBtn"
              size="lg"
              onClick={() => handleSaveBtnClick("hour-14")}
            >
              Save
            </Button>
          </div>
        </Form.Group>
        <Form.Group
          className={`time-block ${
            currentHour < 15
              ? "future"
              : currentHour === 15
              ? "present"
              : "past"
          }`}
          id="hour-15"
          controlId="hour-15"
        >
          <div
            className={`time-block ${
              currentHour < 15
                ? "future"
                : currentHour === 15
                ? "present"
                : "past"
            }`}
            id="hour-15"
          >
            3 P.M.
          </div>

          <Form.Control
            as="textarea"
            className="description"
            defaultValue={localStorage.getItem("hour-15")}
          />
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="saveBtn"
              size="lg"
              onClick={() => handleSaveBtnClick("hour-15")}
            >
              Save
            </Button>
          </div>
        </Form.Group>
        <Form.Group
          className={`time-block ${
            currentHour < 16
              ? "future"
              : currentHour === 16
              ? "present"
              : "past"
          }`}
          id="hour-16"
          controlId="hour-16"
        >
          <div
            className={`time-block ${
              currentHour < 16
                ? "future"
                : currentHour === 16
                ? "present"
                : "past"
            }`}
            id="hour-16"
          >
            4 P.M.
          </div>

          <Form.Control
            as="textarea"
            className="description"
            defaultValue={localStorage.getItem("hour-16")}
          />
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="saveBtn"
              size="lg"
              onClick={() => handleSaveBtnClick("hour-16")}
            >
              Save
            </Button>
          </div>
        </Form.Group>
        <Form.Group
          className={`time-block ${
            currentHour < 17
              ? "future"
              : currentHour === 17
              ? "present"
              : "past"
          }`}
          id="hour-17"
          controlId="hour-17"
        >
          <div
            className={`time-block ${
              currentHour < 17
                ? "future"
                : currentHour === 17
                ? "present"
                : "past"
            }`}
            id="hour-9"
          >
            5 P.M.
          </div>
          <Form.Control
            as="textarea"
            className="description"
            defaultValue={localStorage.getItem("hour-17")}
          />
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              className="saveBtn"
              size="lg"
              onClick={() => handleSaveBtnClick("hour-17")}
            >
              Save
            </Button>
          </div>
        </Form.Group>
      </Form>
    </Container>
  );
}
