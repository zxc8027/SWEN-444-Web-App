import React, { Component } from "react";
import { Card, Media, Badge, Image, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Profile.css";
import { GalleryComponent } from "../Gallery/GalleryComponent";

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
      imageURL: "art/cat.png",
      author: "Longley1997",
      title: "I drew my cat, his name is Oscar! ",
      lastUpdated: "1",
    },
  },
  {
    card: {
      id: 3,
      imageURL: "art/l.jpg",
      author: "Longley1997",
      title:
        "Been practicing my close up shots, hope it shows, feel free to buy this piece, and follow me on Tic Tok",
      lastUpdated: "8",
    },
  },
];

export class Profile extends Component {
  static displayName = Profile.name;

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Header as="h5">
            Profile
            <div className="author">
              <Badge as={Link} to="/profile" variant="secondary">
                @Longley1997
              </Badge>
            </div>
            <div className="author">
              <Badge pill variant="success">
                5 Commisions
              </Badge>{" "}
            </div>
            <div className="author">
              <Badge pill variant="primary">
                3 Posts
              </Badge>{" "}
            </div>
            <div className="author">
              <Badge pill variant="danger">
                1774 Reputation
              </Badge>{" "}
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <Media>
                <Image
                  width={250}
                  height={250}
                  className="mr-3"
                  src="art/longley.jpg"
                />
                <Media.Body>
                  <h5>Hi I am Michael</h5>
                  <p>
                    Michael Longley was born in Barnstaple in South West England
                    in 1985. Having grown up both next to the sea and in close
                    proximity to two National Parks his love of the outdoors
                    grew tremendously. Throughout his life, Michael has always
                    been fascinated by images and how the world is represented
                    through the eyes of others. Naturally, he was drawn to
                    photography. The interest was cultivated during his teenage
                    years and further developed when he opted to take his
                    Bachelors Degree in Photography.
                  </p>
                  <p>
                    After completing his degree, Michael delved even more into
                    his photographic practice, which involved loss and
                    regeneration of life. The images, that Michael takes on his
                    walks in the landscape, are only part of the narrative. he
                    uses the practice of burying his film negatives in the earth
                    to allow the natural environment a voice. It is a
                    collaboration between the artist and the land. Michael
                    cherihes this connection with nature. he feels that the
                    artistic exchange between the land and the artist opens up
                    many opportunities.
                  </p>
                  <p>
                    Michael has also trained as a teacher, specializing in
                    Further Education. he teaches 16-18-year-olds in order to
                    help them foster the same enthusiasm that he has for
                    photography. he is also pursuing a Master’s Degree in
                    Photography at Plymouth University alongside his teaching.
                  </p>
                  <p>
                    Michael was selected as one of the Graduates featured in
                    Source Magazine (2014), Ffotogallery Cardiff. In 2015, he
                    was a finalist South West Graduate Prize. his series called
                    ‘Biosigna’ or Life Signals has been exhibited in London as
                    well as in Bristol.
                  </p>
                  <p>
                    Michael lives and works in South Devon, surrounded by the
                    sea and Dartmoor National Park.
                  </p>
                </Media.Body>
              </Media>
            </Card.Text>
          </Card.Body>
        </Card>

        <div>
          <h1>Posts</h1>
          <CardDeck>
            {data.map((c) => (
              <GalleryComponent
                key={c.card.id}
                card={c.card}
              ></GalleryComponent>
            ))}
          </CardDeck>
        </div>
      </div>
    );
  }
}
