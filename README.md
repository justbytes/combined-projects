# Combined Projects

## Overview

After attending UCSD's Coding Bootcamp I was left with several projects that required some refactoring. React is my favorite front-end framework so I decided to throw all these projects into a single user-friendly, mobile responsive, and well polished React App. There are some projects that didn't fit the metaphorical bill but you can still check them out by going [here](https://github.com/justbytes?tab=repositories).

# Projects

## Password Generator

One of my first projects in the Coding Bootcamp. Originally this project used the DOM prompts to get users password requirements. This app now uses the React Bootstrap check-box and range slider to gather the users password requirements. These requirements are then saved using the useState functionality from React and passed to the function that generates a random password.

## Workday Scheduler

This is an app that a user could use to write down some goals, tasks, or reminders from the hours of 9 A.M. to 5 P.M. This scheduler is color coded with the green background being future hours, red being the current hour, and gray meaning the hour has passed.
This app utilizes local storage to save whatever the user inputs into the text area after the save button is clicked. In the header below the title the date will be displayed which is being done with Moment.js.

## Weather Forecast

The Weather Forecast app uses the Open Weather API to gather the current day and five day forecast for a given city and state. Initially the default will display San Diego, CA weather forecast. Users can input a city name and state in the input fields to change the forecast for their area. This is done by first using an API call with the city name and state which retrieves the current day weather forecast and also collects the longitude and latitude coordinates. The coordinates are then passed to another API call to gather the data for the the five day forecast. This app also utilizes Moment.js to get my desired date format rather then using the one from the API.

## React Quiz

A quiz featuring ten questions about the React framework. Users have 50 seconds to complete the quiz and the results will be shown after the quiz is finished or after they run out of time. After the start button is clicked the instructions card will be given a className of hidden and the quiz questions card will be given a className of show. The timer will begin the count down and once complete the className will be set to hidden and the score card will show. This is done by having the click handler set the useState variables and it is also used to cycle through the questions.

# Back-end Projects

Additionally I added to some of my back-end projects that do not have a UI to the dropdown list on the navbar.

## Manpower Manager

A CLI that orgainizes employee information like: name, title, department, salary, manager and then saves it to a MYSQL database.

## Badge Maker

A CLI that creates employee badges by taking employee information (Name, id, photo) which is then generated into a badge template.

## ECommerce Backend

An ECommerce Backend created utilizing Express.js, Sequelize.js, and MYSQL2.

## ReadMe Generator

A CLI that utilizes Inquirer.js to prompt user to input info about a project they created. The app takes this info and uses th `fs` to combine the questions into a markdown file. The goal for this project was to create something user could use to keep a consistent format for their readMe's.

# Technologies Utilized

-React
\
-React Bootstrap v5.2
\
-Open Weather API
\
-Moment.js
\
-Google Fonts

# Link to site
