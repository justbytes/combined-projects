import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export function HomePage() {
  return (
    <Container fluid>
      <Card
        bg="secondary"
        key="secondary"
        text="light"
        style={{ width: "18rem" }}
        className="mb-2"
      >
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
