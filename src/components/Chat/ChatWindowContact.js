/*
 * Zachary Cook
 *
 * Class for a contact window in the chat.
 */

import React, { Component } from "react";

export class ChatWindowContact extends Component {
  /*
   * Creates the chat window window.
   */
  constructor(props) {
    super(props);
  }

  /*
   * Renders the component.
   */
  render() {
    return <div className="chat-contact-container">
        <img className="chat-contact-picture" src={ this.props["img"] }></img>
        <span>{ this.props["name"] }</span>
    </div>
  }
}
