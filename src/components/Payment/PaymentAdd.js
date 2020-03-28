/*
 * Zachary Cook
 *
 * View for adding a payment option.
 */

import React, { Component } from "react";
import {  Button } from "react-bootstrap";
import "./PaymentOptions.css";

export class PaymentAdd extends Component {
    /*
     * Creates the payment add view.
     */
    constructor(props) {
        super(props);

        // Set the initial state.
        this.state = {
            "method": "Credit Card",
        }
    }

    /*
     * Renders the component.
     */
    render() {
        // Create the toggle bar for the type.
        var topButtons;
        if (this.state["method"] === "Credit Card") {
            topButtons = <div>
                <Button variant="primary" onClick={ ()=> { this.setState({ "method": "Credit Card" }); } }>Credit Card</Button>&nbsp;
                <Button variant="secondary" onClick={ ()=> { this.setState({ "method": "PayPal" }); } }>PayPal</Button>
            </div>
        } else {
            topButtons = <div>
                <Button variant="secondary" onClick={ ()=> { this.setState({ "method": "Credit Card" }); } }>Credit Card</Button>&nbsp;
                <Button variant="primary" onClick={ ()=> { this.setState({ "method": "PayPal" }); } }>PayPal</Button>
            </div>
        }

        // Create the inputs.
        var inputs;
        if (this.state["method"] === "Credit Card") {
            inputs = <div>
                <span>Card number</span><br></br>
                <input className="form-control" style={ { "max-width": "20rem" }}></input>
                <span>CVV/CVC (Security Code)</span><br></br>
                <input className="form-control" style={ { "max-width": "20rem" }}></input>
                <span>Expiration Date</span><br></br>
                <input className="form-control" style={ { "max-width": "20rem" }}></input>
                <span>ZIP Code</span><br></br>
                <input className="form-control" style={ { "max-width": "20rem" }}></input>
            </div>
        } else {
            inputs = <div>( Whatever PayPal requires here )</div>
        }

        // Return the view.
        return <div>
            <center>
                { topButtons }
                <br></br>
                { inputs }
                <br></br>
                <Button variant="primary" onClick={ ()=> { window.location = "/payment"; } }>Confirm</Button>&nbsp;
                <Button variant="secondary" onClick={ ()=> { window.location = "/payment"; } }>Cancel</Button>
            </center>
        </div>
    }
}
