/*
 * Zachary Cook
 *
 * Window for showing and sending chat messages.
 */

import React from "react";
import { ChatWindow } from "./ChatWindow";

export class ChatMessagesWindow extends ChatWindow {
  /*
   * Creates the contacts window.
   */
  constructor(props) {
    super(props,props["name"]);

    // Bind the functions.
    this.openChatWindow = this.openChatWindow.bind(this);
  }

  /*
   * Opens a chat window.
   */
  openChatWindow(name) {
    this.openCallback(name);
  }

  /*
   * Returns the inner contents of the window.
   */
  getChatContents() {
    return <div className="chat-inner-window-container">
      
    </div>
  }
}
