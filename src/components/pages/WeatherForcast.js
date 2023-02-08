import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";

export function WeatherForcast() {
  const handleSearchClick = () => {
    const value = document.querySelector(`.cityName`).value;
    console.log(value);
  };

  return (
    <Container>
      <header>
        <h1 className="display-3">Weather Forcast</h1>
        <p className="lead">Check the weather in your local area!</p>
      </header>
      <Form>
        <Row className="align-items-center">
          <Col sm={3} className="my-1">
            <Form.Control
              id="inlineFormInputName"
              className="cityName"
              placeholder="City Name"
            />
          </Col>
          <Col xs="auto" className="my-1">
            <Button
              variant="primary"
              type="button"
              onClick={() => handleSearchClick()}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}
