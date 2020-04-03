import React, { Component } from "react";
import { Card, Button, Badge, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { confirmOK } from "../Gallery/ConfirmationOK.js";
import { confirm } from "../Gallery/Confirmation.js";

import "./Bounty.css";

export class Bounty extends Component {
  static displayName = Bounty.name;

  constructor(props) {
    super(props);

    this.state = {
      bounty: {
        name: "",
        author: "",
        description: "",
        priceRange: "",
        imageSRC: "",
      },
    };
  }

  componentDidMount() {
    this.setState(this.props.bounty);
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Header className="header" as="h5">
            <div className="div-title">{this.props.bounty.name}</div>
            <div className="div-author">
              <Badge
                as={Link}
                to="/profile"
                className="author-bounty"
                variant="secondary"
              >
                <span className="author-span">
                  {" "}
                  @{this.props.bounty.author}
                </span>
              </Badge>
            </div>
            <div className="div-price">
              <Badge className="price" variant="warning">
                <span className="price-span">
                  {this.props.bounty.priceRange}
                </span>
              </Badge>
            </div>
            <div className="div-claim">
              <Button
                onClick={async () => {
                  if (
                    await confirm("Are you sure you want to claim this bounty?")
                  ) {
                    await confirmOK("Bounty Claimed! User has been notified.");
                  }
                }}
                className="claim"
                variant="primary"
              >
                Claim
              </Button>
            </div>
          </Card.Header>
          <Card.Body className="card-body">
            <Image
              className="art-image"
              src={this.props.bounty.imageSRC}
              thumbnail
            />
            <Card.Text className="description">
              {this.props.bounty.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
