/*
 * Zachary Cook
 *
 * Window for showing and sending chat messages.
 */

import React from "react";
import { ChatWindow } from "./ChatWindow";
import { Card, Button } from "react-bootstrap";

// Test data for messages.
var MESSAGES_TEST_DATA = {
  "Karen Chungus (Manager)": [
    {
      "type": "message",
      "message": "Hello I’m Karen and vaccines are the devil",
      "sender": "other",
    },
  ],
  "John Doe 1": [
    {
      "type": "message",
      "message": "Hello there.",
      "sender": "other",
    },
    {
      "type": "message",
      "message": "General Kenobi! You are a bold one.",
      "sender": "self",
    },
    {
      "type": "image",
      "image": "chat/a-surprise-to-be-sure-but-a-welcome-one.jpg",
      "sender": "other",
    },
    {
      "type": "message",
      "message": "A surprise to be sure, but a welcome one.",
      "sender": "other",
    },
  ],
  "John Doe 2": [
    {
      "type": "message",
      "message": "plz mak thing",
      "sender": "self",
    },
    {
      "type": "commissionStatus",
      "status": "In Progress",
      "sender": "other",
    },
    {
      "type": "invoice",
      "sender": "other",
    },
    {
      "type": "shippingStatus",
      "status": "In Transit",
      "sender": "other",
    },
  ],
}



export class ChatMessagesWindow extends ChatWindow {
  /*
   * Creates the contacts window.
   */
  constructor(props) {
    super(props,props["name"]);

    // Bind the functions.
    this.openChatWindow = this.openChatWindow.bind(this);
    this.getChatMessages = this.getChatMessages.bind(this);
  }

  /*
   * Opens a chat window.
   */
  openChatWindow(name) {
    this.openCallback(name);
  }

  /*
   * Returns the chat messages.
   */
  getChatMessages() {
    // Get the message data and return an empty list if the data doesn't exist.
    let messagesData = MESSAGES_TEST_DATA[this.props["name"]];
    if (messagesData == null) {
      return [];
    }

    // Parse the messages and add the message divs.
    let messageDivs = [];
    for (var i = 0; i < messagesData.length; i++) {
      let messageData = messagesData[i];
      
      // Determine the classes for the message.
      let messageClasses = "";
      if (messageData["sender"] === "self") {
        messageClasses = "chat-message chat-sender-self"
      } else if (messageData["sender"] === "other") {
        messageClasses = "chat-message chat-sender-other"
      }

      // Add the messages.
      let type = messageData["type"];
      if (type === "message") {
        // Add a message.
        messageDivs.push(<div key={ i } className={ messageClasses }>{ messageData["message"] }</div>);
      } else if (type === "image") {
        // Add an image.
        messageDivs.push(<div key={ i } className={ messageClasses }><img className="chat-message-image" src={ messageData["image"] }></img></div>);
      } else if (type == "commissionStatus") {
        // Add a commission status view.
        messageDivs.push(<div key={ i } className={ messageClasses }>
          Your commission is <b>{ messageData["status"] }</b>.<br></br>
          <Button variant="primary" onClick={ () => { document.location="/commission/status"; } }>View Commission</Button>
        </div>);
      } else if (type == "invoice") {
        // Add a invoice view.
        messageDivs.push(<div key={ i } className={ messageClasses }>
          Your commission is <b>pending payment</b>.<br></br>
          <Button variant="primary" onClick={ () => { document.location="/payment"; } }>Pay Invoice</Button>
        </div>);
      } else if (type == "shippingStatus") {
        // Add a shipping status view.
        messageDivs.push(<div key={ i } className={ messageClasses }>
          Your shipment is <b>{ messageData["status"] }</b>.<br></br>
          <Button variant="primary" onClick={ () => { document.location="/shipping/status"; } }>View Status</Button>
        </div>);
      }
    }

    // Return the message divs.
    return messageDivs;
  }

  /*
   * Returns the inner contents of the window.
   */
  getChatContents() {
    return <div className="chat-inner-window-container">
      <div className="chat-messages-container y-scrollable">
        { this.getChatMessages() }
      </div>
      <input className="chat-text-box" placeholder="Type message..."></input>
    </div>
  }
}
