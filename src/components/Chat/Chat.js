/*
 * Zachary Cook
 *
 * Main class for the chat window.
 */

import React, { Component } from "react";
import "./Chat.css";
import { ChatContactsWindow } from "./ChatContactsWindow";
import { ChatMessagesWindow } from "./ChatMessagesWindow";

export class ChatContainer extends Component {
    /*
     * Creates the chat container.
     */
    constructor(props) {
        super(props);

        // Set the initial state.
        this.state = {
            "openWindows": [],
            "commonState": [],
            "contactsState": {
                "open": false,
            }
        }

        // Bind the functions.
        this.openChatWindow = this.openChatWindow.bind(this);
        this.closeChatWindow = this.closeChatWindow.bind(this);
    }

    /*
     * Opens a new chat window.
     */
    openChatWindow(name) {
        var state = this.state;
        if (state["openWindows"].indexOf(name) < 0) {
            state["openWindows"].push(name);
            state["commonState"].push({ "open": true, });
        }
        this.setState(state);
    }

    /*
     * Closes a chat window.
     */
    closeChatWindow(name) {
        var state = this.state;
        var index = state["openWindows"].indexOf(name);
        if (index >= 0) {
            state["openWindows"].pop(index);
            state["commonState"].pop(index);
        }
        this.setState(state);
    }

    /*
    * Renders the component.
    */
    render() {
        // Create the chat windows.
        let chatWindows = [];
        for (var i = 0; i < this.state["openWindows"].length; i++) {
            let name = this.state["openWindows"][i];
            let state = this.state["commonState"][i];
            chatWindows.push(<ChatMessagesWindow key={ name } name={ name } state={ state } closeCallback={ this.closeChatWindow }></ChatMessagesWindow>);
        }
        chatWindows.push(<ChatContactsWindow key="contacts" state={ this.state["contactsState"] } openCallback={ this.openChatWindow }></ChatContactsWindow>);

        // Return the container with the windows.
        return <div className="chat-container">
            { chatWindows }
        </div>
    }
}
