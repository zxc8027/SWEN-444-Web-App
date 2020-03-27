/*
 * Zachary Cook
 *
 * Class for a contact window in the chat.
 */

import React, { Component } from "react";

export class ChatWindowContact extends Component {
  /*
   * Creates the chat contact.
   */
  constructor(props) {
    super(props);
    this.openCallback = props["openCallback"];

    // Bind the functions.
    this.openChatWindow = this.openChatWindow.bind(this);
  }

  /*
   * Opens a chat window.
   */
  openChatWindow() {
    this.openCallback(this.props["name"]);
  }

  /*
   * Renders the component.
   */
  render() {
    return <div onClick={ this.openChatWindow } className="chat-contact-container">
        <img alt={ this.props["name"] } className="chat-contact-picture" src={ this.props["img"] }></img>
        <span>{ this.props["name"] }</span>
    </div>
  }
}
