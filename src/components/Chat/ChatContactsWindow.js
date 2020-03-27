/*
 * Zachary Cook
 *
 * Shows a list of the chat contacts.
 */

import React from "react";
import { ChatWindow } from "./ChatWindow";
import { ChatWindowContact } from "./ChatWindowContact";

export class ChatContactsWindow extends ChatWindow {
  /*
   * Creates the contacts window.
   */
  constructor(props) {
    super(props,"Chat");
    this.openCallback = this.props["openCallback"];

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
    return <div className="chat-inner-window-container y-scrollable">
      <ChatWindowContact openCallback={ this.openCallback } name="Karen Chungus (Manager)" img="chat/karen-chungus.jpg"></ChatWindowContact>
      <ChatWindowContact openCallback={ this.openCallback } name="John Doe 1" img="chat/no-profile-picture.png"></ChatWindowContact>
      <ChatWindowContact openCallback={ this.openCallback } name="John Doe 2" img="chat/no-profile-picture.png"></ChatWindowContact>
      <ChatWindowContact openCallback={ this.openCallback } name="John Doe 3" img="chat/no-profile-picture.png"></ChatWindowContact>
      <ChatWindowContact openCallback={ this.openCallback } name="John Doe 4" img="chat/no-profile-picture.png"></ChatWindowContact>
      <ChatWindowContact openCallback={ this.openCallback } name="John Doe 5" img="chat/no-profile-picture.png"></ChatWindowContact>
      <ChatWindowContact openCallback={ this.openCallback } name="John Doe 6" img="chat/no-profile-picture.png"></ChatWindowContact>
      <ChatWindowContact openCallback={ this.openCallback } name="John Doe 7" img="chat/no-profile-picture.png"></ChatWindowContact>
      <ChatWindowContact openCallback={ this.openCallback } name="John Doe 8" img="chat/no-profile-picture.png"></ChatWindowContact>
      <ChatWindowContact openCallback={ this.openCallback } name="John Doe 9" img="chat/no-profile-picture.png"></ChatWindowContact>
      <ChatWindowContact openCallback={ this.openCallback } name="John Doe 10" img="chat/no-profile-picture.png"></ChatWindowContact>
    </div>
  }
}
