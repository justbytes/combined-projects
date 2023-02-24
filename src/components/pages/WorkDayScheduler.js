import React, { useState, useEffect } from "react";

//Import react bootstrap components
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Import API
import moment from "moment";

//Import styling
import "../../style/WorkDayScheduler.css";

export function WorkDayScheduler() {
  // Initialize state variables
  const [currentHour, setCurrentHour] = useState(moment().hours());
  const [showNotification, setShowNotification] = useState(false);

  //Update hour via moment
  useEffect(() => {
    const hourUpdater = () => {
      setCurrentHour(moment().hours());
    };
    setInterval(hourUpdater, 15000);
  }, []);

  //Saves notes to local storage
  const handleSaveBtnClick = (time) => {
    const value = document.querySelector(`#${time} .description`).value;
    localStorage.setItem(time, value);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  return (
    <>
      <div className="header-border">
        <div className="header">
          <h1 className="header-title">Workday Scheduler</h1>
          <p id="currentDay" className="lead">
            {moment().format("dddd, MMMM Do")}
          </p>

          {showNotification && (
            <Alert variant="secondary">Item saved to localStorage</Alert>
          )}
        </div>
      </div>
      <Container fluid>
        <div className="workday-background d-flex justify-content-center align-items-center">
          <div className="workday-div">
            <Form>
              <Form.Group
                className={`time-block ${
                  currentHour < 9
                    ? "future"
                    : currentHour === 9
                    ? "present"
                    : "past"
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
          </div>
        </div>
      </Container>
    </>
  );
}
