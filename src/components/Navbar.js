import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import "../style/Navbar.css";

export const BootstrapNavbar = () => {
  return (
    <Navbar className="navbar-container" expand="lg">
      <Container fluid>
        <Navbar.Brand className="brand-name" href="/homePage">
          Combined Projects
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar">
            <Nav.Link href="/homePage">Home</Nav.Link>
            <NavDropdown
              className="nav-dropdown"
              title="Backend Projects"
              id="basic-nav-dropdown"
            >
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
          <Nav className="ml-auto">
            <Nav.Link href="/passwordGenerator">Password Generator</Nav.Link>
            <Nav.Link href="/workDayScheduler">Workday Scheduler</Nav.Link>
            <Nav.Link href="/weatherForecast">Weather Forecast</Nav.Link>
            <Nav.Link href="/codingQuiz">React Quiz</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
