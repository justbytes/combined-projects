import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

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
            <Nav.Link href="/codingQuiz">React Quiz</Nav.Link>
            <NavDropdown title="Additional Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://github.com/justbytes/role_master">
                Manpower Manager
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/justbytes/CatWorx.BadgeMaker">
                Badge Maker
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/justbytes/behind_the_site">
                ECommerce Backend
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://github.com/justbytes/when-you-cant-readme">
                ReadMe Generator
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
