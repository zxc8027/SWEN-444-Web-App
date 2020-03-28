import React, { Component } from "react";
import { Bounty } from "./Bounty.jsx";
import "./Home.css";

const data = [
  {
    bounty: {
      id: 1,
      name: "Crow Statue",
      author: "Chili",
      description: "I want a cool bird statue",
      priceRange: "$300 - $500",
      imageSRC: "art/crow.jpg"
    }
  },
  {
    bounty: {
      id: 2,
      name: "Dog paiting",
      author: "Dogster",
      description: "Someone paint my dog thanks.",
      priceRange: "$20 - $100",
      imageSRC: "art/dog.jpg"
    }
  },
  {
    bounty: {
      id: 3,
      name: "Self Portrait",
      author: "Logan",
      description: "Please paint me like Leonardo DiCaprio did on Titanic",
      priceRange: "$1000 - $3000",
      imageSRC: "art/logan.jpg"
    }
  }
];

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Bounties</h1>
        {data.map(c => (
          <Bounty key={c.bounty.id} bounty={c.bounty}></Bounty>
        ))}
      </div>
    );
  }
}
