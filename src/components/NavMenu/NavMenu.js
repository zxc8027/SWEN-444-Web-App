import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import {
  Button,
  OverlayTrigger,
  Popover,
  Form,
  Image,
  Badge,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const PersonIcon = () => (
  <svg
    class="bi bi-person-fill"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
      clip-rule="evenodd"
    />
  </svg>
);

function LogggedInBadge() {
  if (window.localStorage.getItem("signedIn") === null) {
    return null;
  }
  return (
    <Badge className="badge-name" variant="dark">
      <strong>@Longley1997</strong>
    </Badge>
  );
}

const loggedInPopover = (
  <Popover id="popover-loggedin">
    <Popover.Title as="h3">Profile</Popover.Title>
    <Popover.Content>
      <Form onSubmit={() => {}}>
        <Form.Group controlId="formBasicText">
          <Form.Group controlId="formBasicText">
            <Image
              className="profile-image"
              src="art/longley.jpg"
              roundedCircle
            />
          </Form.Group>
          <Form.Group controlId="formBasicText">
            <Badge className="badge-name" variant="dark">
              <strong>@Longley1997</strong>
            </Badge>
          </Form.Group>
          <Button as={Link} to="/profile" variant="primary" type="submit">
            My Profile
          </Button>
        </Form.Group>
      </Form>
      <Form
        onSubmit={() => {
          window.localStorage.removeItem("signedIn");
        }}
      >
        <Form.Group controlId="formBasicText">
          <Button variant="primary" type="submit">
            Sign Out
          </Button>
        </Form.Group>
      </Form>
    </Popover.Content>
  </Popover>
);

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Login</Popover.Title>
    <Popover.Content>
      <Form
        onSubmit={() => {
          window.localStorage.setItem("signedIn", true);
        }}
      >
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
        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button
          as={Link}
          variant="secondary"
          className="create-account"
          to="/account/create"
        >
          Create Account
        </Button>
      </Form>
    </Popover.Content>
  </Popover>
);

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          light
        >
          <Container>
            <NavbarBrand tag={Link} to="/">
              <img
                alt="logo"
                className="top-bar-logo"
                src="ArtBountyLogo.png"
              ></img>
            </NavbarBrand>
            <LogggedInBadge></LogggedInBadge>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse
              className="d-sm-inline-flex flex-sm-row-reverse"
              isOpen={!this.state.collapsed}
              navbar
            >
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-light" to="/gallery">
                    Gallery
                  </NavLink>
                </NavItem>
                <NavItem>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={
                      window.localStorage.getItem("signedIn") === null
                        ? popover
                        : loggedInPopover
                    }
                  >
                    <Button variant="light" className="person-icon">
                      <PersonIcon />
                    </Button>
                  </OverlayTrigger>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
