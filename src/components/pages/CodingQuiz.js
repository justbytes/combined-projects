import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../../style/CodingQuiz.css";

export function CodingQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [gameScreen, setGameScreen] = useState("hidden");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(45);

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

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [time]);

  const handleStartClick = () => {
    setGameScreen("show");
  };

  const handleOptionClick = (event) => {
    if (event.target.dataset.answer === event.target.dataset.option) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("Quiz finsihed");
    }
  };

  return (
    <Container fluid>
      <header>
        <h1 className="display-3">Code Quiz</h1>
        <Button
          onClick={handleStartClick}
          className="waves-effect waves-light btn"
        >
          Start
        </Button>
        <Row className={`scoreRow ${gameScreen}`}>
          <div id="timer">{time}</div>
          <div id="score">Score: {score}</div>
        </Row>
      </header>
      {/* col s12 */}
      <Row className={`row ${gameScreen}`}>
        {/* col s12 m6 */}
        <Col className="col s12 m6">
          <h3>Question:</h3>
          <span className="question">
            {questions[currentQuestion].question}
          </span>
        </Col>
        <Col className="col s12 m6">
          <h3>Choices:</h3>
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
        </Col>
      </Row>
    </Container>
  );
}
