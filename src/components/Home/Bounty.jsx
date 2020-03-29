import React, { Component } from "react";
import { Card, Button, Badge, Image } from "react-bootstrap";
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
        imageSRC: ""
      }
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
              <Badge className="author" variant="secondary">
                @{this.props.bounty.author}
              </Badge>
            </div>
            <div className="div-price">
              <Badge className="price" variant="warning">
                {this.props.bounty.priceRange}
              </Badge>
            </div>
            <div className="div-claim">
              <Button className="claim" variant="primary">
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
