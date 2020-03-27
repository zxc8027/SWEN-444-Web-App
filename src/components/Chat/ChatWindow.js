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
    this.closeCallback = props["closeCallback"];

    // Set the initial state.
    this.state = {
      "open": false,
    }
    if (props["state"] != null) {
      this.state = props["state"];
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
    // Create the top bar.
    var topBar = null;
    if (this.closeCallback == null) {
      topBar = <div className="chat-window-header text-light" onClick={ this.toggleState }>{ this.title }</div>
    } else {
      topBar = <div className="chat-window-header text-light" onClick={ this.toggleState }>
        <div className="chat-title"> { this.title } </div> 
        <span className="chat-close" onClick={ () => this.closeCallback(this.title) }>X</span>
      </div>
    }

    // Return just the header if the window is not open.
    if (this.state["open"] === false) {
      return <div className="chat-window-container" style={ { right: this.props["posRight"] } }>
        {topBar}
      </div>
    }
    
    // Return the window.
    return <div className="chat-window-container" style={ { right: this.props["posRight"] } }>
      { topBar }
      { this.getChatContents() }
    </div>
  }
}
