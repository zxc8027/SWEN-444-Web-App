/*
 * Zachary Cook
 *
 * Base class for a chat window.
 */

import React, { Component } from "react";

export class ChatWindow extends Component {
  /*
   * Creates the chat window window.
   */
  constructor(props,title) {
    super(props);
    this.title = title;

    // Set the initial state.
    this.state = {
      "open": false,
    }

    // Bind the functions.
    this.setOpenState = this.setOpenState.bind(this);
    this.toggleState = this.toggleState.bind(this);
  }

  /*
   * Sets if the window is open or closed.
   */
  setOpenState(open) {
    var state = this.state;
    state["open"] = open;
    this.setState(this.state);
  }

  /*
   * Toggles the window being open or closed.
   */
  toggleState() {
    this.setOpenState(!this.state["open"]);
  }

  /*
   * Returns the inner contents of the window.
   */
  getChatContents() {
    return <div className="chat-inner-window-container"></div>
  }

  /*
   * Renders the component.
   */
  render() {
    // Return just the header if the window is not open.
    if (this.state["open"] === false) {
      return <div className="chat-window-container">
        <div className="chat-window-header text-light" onClick={ this.toggleState }>{ this.title }</div>
      </div>
    }
    
    // Return the window.
    return <div className="chat-window-container">
      <div className="chat-window-header text-light" onClick={ this.toggleState }>{ this.title }</div>
      { this.getChatContents() }
    </div>
  }
}
