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
import { GalleryComponent } from "./GalleryComponent";

const data = [
  {
    card: {
      id: 1,
      imageURL: "art/longley.jpg",
      author: "Longley1997",
      title: "This is a photo I took I hope you like it",
      lastUpdated: "3",
    },
  },
  {
    card: {
      id: 2,
      imageURL: "art/a1.jpg",
      author: "colorfulArtist",
      title: "I drew this painting, enjoy! ",
      lastUpdated: "1",
    },
  },
  {
    card: {
      id: 3,
      imageURL: "art/a2.jpeg",
      author: "Leonardo da Vinci",
      title: "Its smaller in real life :(",
      lastUpdated: "8",
    },
  },
];

const data2 = [
  {
    card: {
      id: 1,
      imageURL: "art/a3.jpg",
      author: "Edvard Munch",
      title: "The Scream",
      lastUpdated: "9",
    },
  },
  {
    card: {
      id: 2,
      imageURL: "art/a4.jpeg",
      author: "Cioffi",
      title: "Feeling cute, might delete later.",
      lastUpdated: "54",
    },
  },
  {
    card: {
      id: 3,
      imageURL: "art/a5.png",
      author: "Sanic",
      title: "Gotta go fast",
      lastUpdated: "45",
    },
  },
];

export class Gallery extends Component {
  static displayName = Gallery.name;

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Gallery</h1>
        <InputGroup className="search-bar">
          <FormControl
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />

          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title="Filter"
            id="input-group-dropdown-2"
          >
            <Dropdown.Item href="#">Title</Dropdown.Item>
            <Dropdown.Item href="#">Accounts</Dropdown.Item>
            <Dropdown.Item href="#">Tags</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Most Popular</Dropdown.Item>
          </DropdownButton>
        </InputGroup>
        <CardDeck>
          {data.map((c) => (
            <GalleryComponent key={c.card.id} card={c.card}></GalleryComponent>
          ))}
        </CardDeck>
        <CardDeck>
          {data2.map((c) => (
            <GalleryComponent key={c.card.id} card={c.card}></GalleryComponent>
          ))}
        </CardDeck>
      </div>
    );
  }
}
