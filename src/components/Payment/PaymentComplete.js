/*
 * Zachary Cook
 *
 * View for showing a payment was complete.
 */

import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./PaymentOptions.css";

export class PaymentComplete extends Component {
    /*
    * Renders the component.
    */
    render() {
        // Return the view.
        return <div>
            <Card>
                <Card.Header as="h5">Pay to: John Doe</Card.Header>
                <Card.Body>
                    <img className="payment-image" src="chat/no-profile-picture.png" alt="John Doe"></img>
                    <Card.Text>Reason: Commission<br></br>Amount due: $420.69</Card.Text>
                </Card.Body>
            </Card>
            <center>
                <p>Payment complete! You and the artist should get an email reciept shortly.</p>
                <Button variant="primary" onClick={ ()=> { window.location = "/" } }>Return Home</Button>
            </center>
        </div>
    }
}
