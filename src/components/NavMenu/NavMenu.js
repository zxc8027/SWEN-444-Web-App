import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import { Button, OverlayTrigger, Popover, Form, Col } from "react-bootstrap";
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

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Profile</Popover.Title>
    <Popover.Content>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter bounty title" />
        </Form.Group>
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
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
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
                    overlay={popover}
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
