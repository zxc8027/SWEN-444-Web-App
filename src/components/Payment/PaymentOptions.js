/*
 * Zachary Cook
 *
 * View for choosing payment options.
 */

import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./PaymentOptions.css";

export class PaymentOptions extends Component {
    /* 
     * Confirms to pay.
     */
    confirmPayment(methodName) {
        if (window.confirm("Are you sure you want to use " + methodName + "?")) {
            window.location = "/payment/confirm";
        }
    }

    /* 
     * Removes a payment option.
     */
    cancelPayment() {
        alert("This isn't implemented. Pretend it is. ¯\\_(ツ)_/¯")
    }

    /*
    * Renders the component.
    */
    render() {
        // Return the view.1
        return <div>
            <Card>
                <Card.Header as="h5">Pay to: John Doe</Card.Header>
                <Card.Body>
                <   img className="payment-image" src="chat/no-profile-picture.png"></img>
                    <Card.Text>Reason: Commission<br></br>Amount due: $420.69</Card.Text>
                </Card.Body>
            </Card>
            <br></br>
            <Card>
                <Card.Header as="h5">My Payment Method 1</Card.Header>
                <Card.Body>
                    <Card.Text>Visa (ending with 1234, expires 12/24)
                        <br></br>
                        <Button variant="primary" onClick={ ()=> { this.confirmPayment("My Payment Method 1") } }>Use</Button>&nbsp;
                        <Button variant="secondary" onClick={ this.cancelPayment }>Remove</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h5">My Payment Method 2</Card.Header>
                <Card.Body>
                    <Card.Text>Visa (ending with 2345, expires 9/25)
                        <br></br>
                        <Button variant="primary" onClick={ ()=> { this.confirmPayment("My Payment Method 2") } }>Use</Button>&nbsp;
                        <Button variant="secondary" onClick={ this.cancelPayment }>Remove</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h5">My Payment Method 3 (Expired)</Card.Header>
                <Card.Body>
                    <Card.Text>Visa (ending with 4567, expired 12/19)
                        <br></br>
                        <Button variant="secondary" onClick={ this.cancelPayment }>Remove</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header as="h5">My Payment Method 4</Card.Header>
                <Card.Body>
                    <Card.Text>PayPal
                        <br></br>
                        <Button variant="primary" onClick={ ()=> { this.confirmPayment("PayPal") } }>Use</Button>&nbsp;
                        <Button variant="secondary" onClick={ this.cancelPayment }>Remove</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
            <center>
                <Button variant="primary" onClick={ ()=> { window.location = "/payment/add"; } }>Add New Payment Method</Button><br></br><br></br><br></br><br></br>
                <Button variant="secondary" onClick={ ()=> { window.history.back(); } }>Cancel</Button>
            </center>
        </div>
    }
}
