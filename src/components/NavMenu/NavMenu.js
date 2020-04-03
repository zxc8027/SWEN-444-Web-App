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
  Toast,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

const BellIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
  >
    <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
  </svg>
);

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
    <Badge as={Link} to="/profile" className="badge-name" variant="dark">
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
            <Badge
              as={Link}
              to="/profile"
              className="badge-name"
              variant="dark"
            >
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

function NotificationToasts() {
  return (
    <>
      <Toast>
        <Toast.Header>
          <img
            src="art/money.png"
            width="35px"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">Pay Invoice</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>You have an invoice to pay: </Toast.Body>
        <div>
          <Button
            className="toast-button"
            as={Link}
            to="/payment"
            variant="primary"
          >
            Pay Invoice
          </Button>
        </div>
      </Toast>
      <Toast>
        <Toast.Header>
          <img
            src="art/miner.png"
            width="35px"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">View Bounty</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>Check the status of your Bounty: </Toast.Body>
        <div>
          <Button
            className="toast-button"
            as={Link}
            to="/commission/status"
            variant="primary"
          >
            Bounty Status
          </Button>
        </div>
      </Toast>
      <Toast>
        <Toast.Header>
          <img
            src="art/industry.png"
            width="35px"
            className="rounded mr-2"
            alt=""
          />
          <strong className="mr-auto">View Shipment</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>Your shipment is in transit: </Toast.Body>
        <div>
          <Button
            className="toast-button"
            as={Link}
            to="/shipping/status"
            variant="primary"
          >
            View Shipment
          </Button>
        </div>
      </Toast>
    </>
  );
}

const popoverBell = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Notifications</Popover.Title>
    <Popover.Content>
      <NotificationToasts></NotificationToasts>
    </Popover.Content>
  </Popover>
);

const popoverBellEmpty = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Notifications</Popover.Title>
    <Popover.Content>
      <small>Sign in to view notifications.</small>
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
                <NavItem>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={
                      window.localStorage.getItem("signedIn") === null
                        ? popoverBellEmpty
                        : popoverBell
                    }
                  >
                    <Button variant="light" className="bell-icon">
                      <BellIcon />
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
