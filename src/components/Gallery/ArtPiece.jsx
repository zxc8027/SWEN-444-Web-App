import React, { Component } from "react";
import { Link } from "react-router-dom";
import { confirm } from "./Confirmation.js";
import { confirmOK } from "./ConfirmationOK.js";
import {
  Media,
  Card,
  Image,
  Badge,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import "./ArtPiece.css";

export class ArtPiece extends Component {
  static displayName = ArtPiece.name;

  constructor(props) {
    super(props);
    this.state = { message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleChange = (event) => {};

  async handleOnClick() {
    if (await confirm("Are your sure?")) {
      await confirmOK("Successfully Purchased");
    } else {
    }
  }

  render() {
    return (
      <div>
        <Media>
          <img
            className="align-self-start mr-3"
            src="art/a4.jpeg"
            alt="Generic placeholder"
          />
          <Media.Body>
            <Card>
              <Card.Header as="h5">
                Joseph Stalin{" "}
                <div className="author">
                  <Badge variant="warning">$500 - $1000</Badge>
                  <Button
                    onClick={this.handleOnClick}
                    className="buy-Button"
                    variant="primary"
                  >
                    Buy
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  This is a glorius picture of the myth, the man, the legend,
                  Joey Stalin.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header as="h5">
                Profile
                <div className="author">
                  <Badge as={Link} to="/profile" variant="secondary">
                    @Cioffi
                  </Badge>
                </div>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Media>
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="art/cioffi.jpeg"
                    />
                    <Media.Body>
                      <h5>Hi I am Stephen Cioffi</h5>
                      <p>
                        I am a Lieutenant Stephen Cioffi of the greater Boston
                        Police Department, I am a part time artist selling
                        pictures of dictators from the 19th century.
                      </p>
                    </Media.Body>
                  </Media>
                </Card.Text>
              </Card.Body>
            </Card>
          </Media.Body>
        </Media>
        <Form className="comment-form">
          <Form.Group controlId="formBasicComment">
            <Form.Label>Post a comment</Form.Label>
            <Form.Control type="text" placeholder="Enter comment" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
        <Card>
          <Card.Header className="comment" as="h5">
            Comments
          </Card.Header>
          <Card.Body>
            <Card className="card-comment">
              <Card.Body>
                <Card.Text>
                  <Media>
                    <Image
                      width={64}
                      height={64}
                      className="mr-3"
                      src="art/ragu.jpeg"
                    />
                    <Media.Body>
                      <p>
                        Wow, that is one handsome picture, also I make the best
                        sauce.
                      </p>
                    </Media.Body>
                  </Media>
                  <div className="comment-name">
                    <Badge as={Link} to="/profile" variant="secondary">
                      @Ragu
                    </Badge>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
