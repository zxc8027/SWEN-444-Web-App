import React, { Component } from "react";
import { Bounty } from "./Bounty.jsx";
import { Button, Popover, OverlayTrigger, Form, Col } from "react-bootstrap";
import { confirmOK } from "../Gallery/ConfirmationOK.js";
import "./Home.css";
import { Redirect } from "react-router-dom";

const data = [
  {
    bounty: {
      id: 1,
      name: "Crow Statue",
      author: "Chili",
      description: "I want a cool bird statue",
      priceRange: "$300 - $500",
      imageSRC: "art/crow.jpg",
    },
  },
  {
    bounty: {
      id: 2,
      name: "Dog painting",
      author: "Dogster",
      description: "Someone paint my dog thanks.",
      priceRange: "$20 - $100",
      imageSRC: "art/dog.jpg",
    },
  },
  {
    bounty: {
      id: 3,
      name: "Self Portrait",
      author: "Logan",
      description: "Please paint me like Leonardo DiCaprio did on Titanic",
      priceRange: "$1000 - $3000",
      imageSRC: "art/logan.jpg",
    },
  },
];

const bounty = {
  bounty: {
    id: 4,
    name: "Oil Painting",
    author: "Longley1997",
    description: "Create an oil painting of my summer home please.",
    priceRange: "$300 - $500",
    imageSRC: "art/hobbit.jpg",
  },
};

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Create Bounty</Popover.Title>
    <Popover.Content>
      <Form
        onSubmit={async (event) => {
          event.preventDefault();
          if (await confirmOK("Bounty successfully created")) {
            var bounties = JSON.parse(
              window.localStorage.getItem("bountyData")
            );

            bounties.push(bounty);

            window.localStorage.setItem("bountyData", JSON.stringify(bounties));
            window.location.reload();
          }
        }}
      >
        <Form.Group controlId="formBasicText">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter bounty title" />
        </Form.Group>
        <Form.Group controlId="formBasicText">
          <Form.Label>Description</Form.Label>
          <textarea
            className="description-create"
            resize="vertical"
            type="textarea"
            placeholder="Enter bounty description"
          />
        </Form.Group>
        <Form.Label>Price Range</Form.Label>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="formBasicText">
            <Form.Control type="number" placeholder="Low" />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formBasicText">
            <Form.Control type="number" placeholder="High" />
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formBasicText">
          <Form.Label>Image</Form.Label>
          <Form.File id="custom-file" label="Custom file input" custom />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Popover.Content>
  </Popover>
);

const CreateBounty = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="info" className="add-bounty">
      <strong>Create</strong>
    </Button>
  </OverlayTrigger>
);

export class Home extends Component {
  static displayName = Home.name;

  constructor(props) {
    super(props);

    this.state = {
      home: {
        show: "",
        setShow: "",
        setTarget: "",
        target: "",
        imageSRC: "",
      },
    };
  }

  render() {
    if (window.localStorage.getItem("bountyData") === null) {
      window.localStorage.setItem("bountyData", JSON.stringify(data));
    }
    var bounties = JSON.parse(window.localStorage.getItem("bountyData"));

    return (
      <div>
        <CreateBounty></CreateBounty>
        <h1>Bounties </h1>
        {bounties.map((c) => (
          <Bounty key={c.bounty.id} bounty={c.bounty}></Bounty>
        ))}
      </div>
    );
  }
}
