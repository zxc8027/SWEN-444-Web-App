import React, { Component } from "react";
import { Container } from "reactstrap";
import { NavMenu } from "./NavMenu/NavMenu";
import { ChatContainer } from "./Chat/Chat";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container>{this.props.children}</Container>
        <ChatContainer></ChatContainer>
      </div>
    );
  }
}
