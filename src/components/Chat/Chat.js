/*
 * Zachary Cook
 *
 * Main class for the chat window.
 */

import React, { Component } from "react";
import "./Chat.css";
import { ChatContactsWindow } from "./ChatContactsWindow";

export class ChatContainer extends Component {
  /*
   * Creates the chat container.
   */
  constructor(props) {
    super(props);
  }

  /*
   * Renders the component.
   */
  render() {
    return <div className="chat-container">
        <ChatContactsWindow></ChatContactsWindow>
    </div>
  }
}
