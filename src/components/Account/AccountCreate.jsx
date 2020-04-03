import React, { Component } from "react";
import { Button, Popover, OverlayTrigger, Form, Col } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./AccountCreate.css";

export class AccountCreate extends Component {
  static displayName = AccountCreate.name;

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (window.localStorage.getItem("signedIn") !== null) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Form
          onSubmit={() => {
            window.localStorage.setItem("signedIn", true);
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicImage">
            <Form.Label>Profile picture</Form.Label>
            <Form.File id="custom-file" label="Profile picture" custom />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    );
  }
}
