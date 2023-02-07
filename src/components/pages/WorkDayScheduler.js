import React, { useState, useEffect } from "react";
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
    <div>
      <header className="jumbotron">
        <h1 className="display-3">Work Day Scheduler</h1>
        <p className="lead">
          A simple calendar app for scheduling your work day
        </p>
        <p id="currentDay" className="lead"></p>
      </header>
      {showNotification && (
        <div className="notification show">Item saved to localStorage</div>
      )}
      <div id="currentDay">{moment().format("dddd, MMMM Do")}</div>
      <div className="time-block-container">
        <div
          className={`time-block ${
            currentHour < 9 ? "future" : currentHour === 9 ? "present" : "past"
          }`}
          id="hour-9"
        >
          <textarea
            className="description"
            defaultValue={localStorage.getItem("hour-9")}
          />
          <button
            className="saveBtn"
            onClick={() => handleSaveBtnClick("hour-9")}
          >
            Save
          </button>
        </div>
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
          <textarea
            className="description"
            defaultValue={localStorage.getItem("hour-10")}
          />
          <button
            className="saveBtn"
            onClick={() => handleSaveBtnClick("hour-10")}
          >
            Save
          </button>
        </div>
        <div
          className={`time-block ${
            currentHour < 11
              ? "future"
              : currentHour === 11
              ? "present"
              : "past"
          }`}
          id="hour-10"
        >
          <textarea
            className="description"
            defaultValue={localStorage.getItem("hour-11")}
          />
          <button
            className="saveBtn"
            onClick={() => handleSaveBtnClick("hour-11")}
          >
            Save
          </button>
        </div>
        <div
          className={`time-block ${
            currentHour < 12
              ? "future"
              : currentHour === 12
              ? "present"
              : "past"
          }`}
          id="hour-10"
        >
          <textarea
            className="description"
            defaultValue={localStorage.getItem("hour-12")}
          />
          <button
            className="saveBtn"
            onClick={() => handleSaveBtnClick("hour-12")}
          >
            Save
          </button>
        </div>
        <div
          className={`time-block ${
            currentHour < 13
              ? "future"
              : currentHour === 13
              ? "present"
              : "past"
          }`}
          id="hour-10"
        >
          <textarea
            className="description"
            defaultValue={localStorage.getItem("hour-13")}
          />
          <button
            className="saveBtn"
            onClick={() => handleSaveBtnClick("hour-13")}
          >
            Save
          </button>
        </div>
        <div
          className={`time-block ${
            currentHour < 14
              ? "future"
              : currentHour === 14
              ? "present"
              : "past"
          }`}
          id="hour-10"
        >
          <textarea
            className="description"
            defaultValue={localStorage.getItem("hour-14")}
          />
          <button
            className="saveBtn"
            onClick={() => handleSaveBtnClick("hour-14")}
          >
            Save
          </button>
        </div>
        <div
          className={`time-block ${
            currentHour < 15
              ? "future"
              : currentHour === 15
              ? "present"
              : "past"
          }`}
          id="hour-10"
        >
          <textarea
            className="description"
            defaultValue={localStorage.getItem("hour-15")}
          />
          <button
            className="saveBtn"
            onClick={() => handleSaveBtnClick("hour-15")}
          >
            Save
          </button>
        </div>
        <div
          className={`time-block ${
            currentHour < 16
              ? "future"
              : currentHour === 16
              ? "present"
              : "past"
          }`}
          id="hour-10"
        >
          <textarea
            className="description"
            defaultValue={localStorage.getItem("hour-16")}
          />
          <button
            className="saveBtn"
            onClick={() => handleSaveBtnClick("hour-16")}
          >
            Save
          </button>
        </div>
        <div
          className={`time-block ${
            currentHour < 17
              ? "future"
              : currentHour === 17
              ? "present"
              : "past"
          }`}
          id="hour-10"
        >
          <textarea
            className="description"
            defaultValue={localStorage.getItem("hour-17")}
          />
          <button
            className="saveBtn"
            onClick={() => handleSaveBtnClick("hour-17")}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
