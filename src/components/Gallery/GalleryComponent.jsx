import React, { Component } from "react";
import {
  Card,
  CardDeck,
  Badge,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Gallery.css";

export class GalleryComponent extends Component {
  static displayName = GalleryComponent.name;

  constructor(props) {
    super(props);

    this.state = {
      card: {
        id: 1,
        imageURL: "",
        author: "",
        title: "",
        lastUpdated: "",
      },
    };
  }

  componentDidMount() {
    this.setState(this.props.card);
  }

  render() {
    return (
      <Card>
        <Button as={Link} to="/art" variant="link">
          <Card.Img variant="top" src={this.state.imageURL} />
        </Button>
        <Card.Body>
          <Badge as={Link} to="/profile" variant="secondary">
            @{this.state.author}
          </Badge>
        </Card.Body>
        <Card.Body>
          <Card.Title>{this.state.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            Last updated {this.state.lastUpdated} mins ago
          </small>
        </Card.Footer>
      </Card>
    );
  }
}
