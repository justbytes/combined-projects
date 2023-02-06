import React from "react";
import moment from "moment";

import "../../style/WorkDayScheduler.css";

export function WorkDayScheduler() {
  document.addEventListener("DOMContentLoaded", function () {
    // listen for save button clicks
    document.querySelectorAll(".saveBtn").forEach(function (saveButton) {
      saveButton.addEventListener("click", function () {
        // get nearby values
        var value = saveButton.parentNode.querySelector(".description").value;
        var time = saveButton.parentNode.getAttribute("id");

        // save in localStorage
        localStorage.setItem(time, value);

        // Show notification that item was saved to localStorage by adding class 'show'
        document.querySelector(".notification").classList.add("show");

        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
          document.querySelector(".notification").classList.remove("show");
        }, 5000);
      });
    });

    function hourUpdater() {
      // get current number of hours
      var currentHour = moment().hours();

      // loop over time blocks
      document.querySelectorAll(".time-block").forEach(function (timeBlock) {
        var blockHour = parseInt(timeBlock.getAttribute("id").split("-")[1]);

        // check if we've moved past this time
        if (blockHour < currentHour) {
          timeBlock.classList.add("past");
        } else if (blockHour === currentHour) {
          timeBlock.classList.remove("past");
          timeBlock.classList.add("present");
        } else {
          timeBlock.classList.remove("past");
          timeBlock.classList.remove("present");
          timeBlock.classList.add("future");
        }
      });
    }

    hourUpdater();

    // set up interval to check if current time needs to be updated
    setInterval(hourUpdater, 15000);

    // load any saved data from localStorage
    document.querySelector("#hour-9 .description").value =
      localStorage.getItem("hour-9");
    document.querySelector("#hour-10 .description").value =
      localStorage.getItem("hour-10");
    document.querySelector("#hour-11 .description").value =
      localStorage.getItem("hour-11");
    document.querySelector("#hour-12 .description").value =
      localStorage.getItem("hour-12");
    document.querySelector("#hour-13 .description").value =
      localStorage.getItem("hour-13");
    document.querySelector("#hour-14 .description").value =
      localStorage.getItem("hour-14");
    document.querySelector("#hour-15 .description").value =
      localStorage.getItem("hour-15");
    document.querySelector("#hour-16 .description").value =
      localStorage.getItem("hour-16");
    document.querySelector("#hour-17 .description").value =
      localStorage.getItem("hour-17");

    // display current day on page
    document.querySelector("#currentDay").textContent =
      moment().format("dddd, MMMM Do");
  });
  return (
    <div className="wrapper">
      <header className="jumbotron">
        <h1 className="display-3">Work Day Scheduler</h1>
        <p className="lead">
          A simple calendar app for scheduling your work day
        </p>
        <p id="currentDay" className="lead"></p>
      </header>
      <section className="text-center notification" id="notify">
        Appointment Added to <code>localStorage</code> ✔️
      </section>
      <div className="container">
        <div id="hour-9" className="row time-block">
          <div className="col-md-1 hour">9AM</div>
          <textarea className="col-md-10 description"></textarea>
          <button className="btn saveBtn col-md-1">
            <i className="fas fa-save"></i>
          </button>
        </div>
        <div id="hour-10" className="row time-block">
          <div className="col-md-1 hour">10AM</div>
          <textarea className="col-md-10 description"></textarea>
          <button className="btn saveBtn col-md-1">
            <i className="fas fa-save"></i>
          </button>
        </div>
        <div id="hour-11" className="row time-block">
          <div className="col-md-1 hour">11AM</div>
          <textarea className="col-md-10 description"></textarea>
          <button className="btn saveBtn col-md-1">
            <i className="fas fa-save"></i>
          </button>
        </div>
        <div id="hour-12" className="row time-block">
          <div className="col-md-1 hour">12PM</div>
          <textarea className="col-md-10 description"></textarea>
          <button className="btn saveBtn col-md-1">
            <i className="fas fa-save"></i>
          </button>
        </div>
        <div id="hour-13" className="row time-block">
          <div className="col-md-1 hour">1PM</div>
          <textarea className="col-md-10 description"></textarea>
          <button className="btn saveBtn col-md-1">
            <i className="fas fa-save"></i>
          </button>
        </div>
        <div id="hour-14" className="row time-block">
          <div className="col-md-1 hour">2PM</div>
          <textarea className="col-md-10 description"></textarea>
          <button className="btn saveBtn col-md-1">
            <i className="fas fa-save"></i>
          </button>
        </div>
        <div id="hour-15" className="row time-block">
          <div className="col-md-1 hour">3PM</div>
          <textarea className="col-md-10 description"></textarea>
          <button className="btn saveBtn col-md-1">
            <i className="fas fa-save"></i>
          </button>
        </div>
        <div id="hour-16" className="row time-block">
          <div className="col-md-1 hour">4PM</div>
          <textarea className="col-md-10 description"></textarea>
          <button className="btn saveBtn col-md-1">
            <i className="fas fa-save"></i>
          </button>
        </div>
        <div id="hour-17" className="row time-block">
          <div className="col-md-1 hour">5PM</div>
          <textarea className="col-md-10 description"></textarea>
          <button className="btn saveBtn col-md-1">
            <i className="fas fa-save"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
