import { Navbar, Nav, Container } from "react-bootstrap";

export const BootstrapNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/homePage">Combined Projects</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/homePage">Home</Nav.Link>
            <Nav.Link href="/passwordGenerator">Password Generator</Nav.Link>
            <Nav.Link href="/workDayScheduler">Work Day Scheduler</Nav.Link>
            <Nav.Link href="/weatherForecast">Weather Forecast</Nav.Link>
            <Nav.Link href="/codingQuiz">Coding Quiz</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
