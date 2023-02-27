import React, { useState } from "react";

//Import react bootstrap components

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

//Import react animation
import Confetti from "react-confetti";

//Import styling
import "../../style/CodingQuiz.css";

export function CodingQuiz() {
  //Set state variables
  const [startScreen, setStartScreen] = useState("show");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameScreen, setGameScreen] = useState("hidden");
  const [scoreBoard, setScoreBoard] = useState("hidden");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(45);
  const [showConfetti, setShowConfetti] = useState(false);

  //Quiz questions, choices, and answers
  const questions = [
    {
      question: "What is React.js",
      options: [
        "A JavaScript library for building user interfaces",
        "A CSS framework",
        "A type of database",
        "A web server technology",
      ],
      answer: "A JavaScript library for building user interfaces",
    },
    {
      question: "What is the purpose of JSX in React",
      options: [
        "To make React code easier to read and write",
        "To allow the use of HTML in JavaScript",
        "To increase the loading speed of the website",
        "To provide better security",
      ],
      answer: "To allow the use of HTML in JavaScript",
    },
    {
      question: "What is a React component",
      options: [
        "A set of HTML and CSS code",
        "A self-contained module that represents a part of the user interface",
        "A tool for making network requests",
        "A styling library",
      ],
      answer:
        "A self-contained module that represents a part of the user interface",
    },
    {
      question: "How is the state of a React component updated?",
      options: [
        "By changing the state property directly",
        "By modifying the props passed to the component",
        "By using the setState method",
        "By using the forceUpdate method",
      ],
      answer: "By using the setState method",
    },
    {
      question: "What is the Virtual DOM in React?",
      options: [
        "A lightweight in-memory representation of the actual DOM",
        "A tool for debugging React code",
        "A way to manipulate the real DOM directly",
        "A feature for optimizing server-side rendering",
      ],
      answer: "A lightweight in-memory representation of the actual DOM",
    },
    {
      question: "How is the performance of a React app optimized?",
      options: [
        "By using the Virtual DOM",
        "By reducing the number of components",
        "By making the components as simple as possible",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What is the significance of Redux in React development?",
      options: [
        "It provides a centralized state management solution",
        "It allows for easier data sharing between components",
        "It speeds up the development process",
        "It is required to use React",
      ],
      answer: "It provides a centralized state management solution",
    },
    {
      question: "What is the purpose of the React Router library?",
      options: [
        "To handle client-side routing",
        "To manage server-side routing",
        "To handle data storage",
        "To manage server-side rendering",
      ],
      answer: "To handle client-side routing",
    },
    {
      question:
        "What is the syntax for creating a functional component in React?",
      options: [
        "function ComponentName(props) {}",
        "class ComponentName extends React.Component {}",
        "var ComponentName = function(props) {}",
        "const ComponentName = (props) => {}",
      ],
      answer: "const ComponentName = (props) => {}",
    },
    {
      question: "What is the syntax for importing a component in React?",
      options: [
        `'import ComponentName from './ComponentName'`,
        `require('./ComponentName')`,
        `include './ComponentName'`,
        `using './ComponentName'`,
      ],
      answer: `'import ComponentName from './ComponentName'`,
    },
  ];

  //Displays the quiz sets timer
  const handleStartClick = () => {
    setGameScreen("show");
    setStartScreen("hidden");
    setTime(45000); // set initial time

    const timer = setInterval(() => {
      setTime((time) => time - 1); // decrement time every second
    }, 1000);

    // clear the timer when time is up
    setTimeout(() => {
      clearInterval(timer);
      setGameScreen("hidden");
      setScoreBoard("show");
    }, 45000);
  };

  const handleOptionClick = (event) => {
    //Adds correct answers to score
    if (event.target.dataset.answer === event.target.dataset.option) {
      setScore(score + 1);
    }
    //Cycles through questions
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      //Hides the quiz and displays score board and triggers confetti animation
    } else {
      setGameScreen("hidden");
      setScoreBoard("show");
      setShowConfetti(true);
    }
  };

  return (
    <>
      <div className="header-border">
        {showConfetti && <Confetti />}
        <div className="header">
          <h1 className="header-title">React.JS Quiz</h1>
          <p className="lead">Test your React knowledge</p>
          <Row className={`scoreRow ${gameScreen}`}>
            <div id="timer">{time}</div>
          </Row>
        </div>
      </div>
      {/* Initial starting screen displaying instructions to user */}
      <div className={`start-screen ${startScreen}`}>
        <Card className={`instructions ${startScreen}`}>
          <Card.Header>Are you ready?</Card.Header>
          <Card.Body>
            <Card.Title>Instructions</Card.Title>
            <Card.Text>
              You have 45 seconds to complete a 10 question quiz about the
              React.js framework.
              <br />
              Your score will be displayed after answering all the questions.{" "}
              <br />
              Good Luck!
            </Card.Text>
            <Button className="start-quiz-button" onClick={handleStartClick}>
              Start
            </Button>
          </Card.Body>
          {/* After start button is clicked it will display question and answers */}
        </Card>
      </div>
      <div className={`quiz-screen ${gameScreen}`}>
        <Card className={`questions ${gameScreen}`}>
          <Card.Title>
            <h3>Question:</h3>
          </Card.Title>
          <Card.Body>
            <Row>
              <span className="question">
                {questions[currentQuestion].question}
              </span>
            </Row>
          </Card.Body>
        </Card>
        <Card className={`choices ${gameScreen}`}>
          <Card.Title>
            <h3>Choices:</h3>
          </Card.Title>
          <Card.Body>
            <Row>
              <Button
                className="option"
                data-option={questions[currentQuestion].options[0]}
                data-answer={questions[currentQuestion].answer}
                onClick={handleOptionClick}
              >
                {questions[currentQuestion].options[0]}
              </Button>
            </Row>
            <Row>
              <Button
                className="option"
                data-option={questions[currentQuestion].options[1]}
                data-answer={questions[currentQuestion].answer}
                onClick={handleOptionClick}
              >
                {questions[currentQuestion].options[1]}
              </Button>
            </Row>
            <Row>
              <Button
                className="option"
                data-option={questions[currentQuestion].options[2]}
                data-answer={questions[currentQuestion].answer}
                onClick={handleOptionClick}
              >
                {questions[currentQuestion].options[2]}
              </Button>
            </Row>
            <Row>
              <Button
                className="option"
                data-option={questions[currentQuestion].options[3]}
                data-answer={questions[currentQuestion].answer}
                onClick={handleOptionClick}
              >
                {questions[currentQuestion].options[3]}
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </div>
      <div className={`score-screen ${scoreBoard}`}>
        {/* After quiz is finished it will display the scoreboard and trigger animation */}
        <Card className={`scoreBoard ${scoreBoard}`}>
          <Card.Title>
            <h3>Your Results</h3>
          </Card.Title>
          <Card.Body>
            <h5>{score}</h5>
            <Button onClick={() => window.location.reload(false)}>
              Retest
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
