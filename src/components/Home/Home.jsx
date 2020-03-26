import React, { Component } from "react";
import "./Home.css";

import { Card, Button } from "react-bootstrap";

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div>
          <Card>
            <Card.Header as="h5">Royal Crow Commision</Card.Header>
            <Card.Body>
              <Card.Title>Crow Commission</Card.Title>
              <Card.Text>I want someone to make me a sick crow</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Header as="h5">Royal Crow Commision</Card.Header>
            <Card.Body>
              <Card.Title>Crow Commission</Card.Title>
              <Card.Text>I want someone to make me a sick crow</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
