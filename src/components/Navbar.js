import { Navbar, Nav, Container } from "react-bootstrap";

export const BootstrapNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/homePage">Combined Projects</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/homePage">Home</Nav.Link>
            <Nav.Link href="/passwordGenerator">Password Generator</Nav.Link>
            <Nav.Link href="/workDayScheduler">Work Day Scheduler</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
