/*
 * Zachary Cook
 *
 * Status window for shipping statuses.
 */

import React, { Component } from "react";
import { StatusBar } from "./StatusBar";
import "./Status.css";

// Test data for the shipping status.
var SHIPPING_STATUS_DEMO_WAYPOINTS = [
    {
        "position": 0,
        "name": "Shipped",
        "date": "April 29th, 2020",
        "description": "Your package has been shipped.",
    },
    {
        "position": 0.2,
        "name": "Processed",
        "date": "April 30th, 2020",
        "description": "Your package has been processed in Lowell, MA.",
    },
    {
        "position": 0.5,
        "name": "In Transit",
        "date": "April 31st, 2020",
        "description": "Your package has been processed in Denver, Colorado.",
    },
    {
        "position": 0.8,
        "name": "In Transit",
        "date": "May 1st, 2020",
        "description": "Your package has been processed in Rochester, NY. Expected to be shipped the next business day.",
    },
]



export class ShippingStatus extends Component {
  /*
   * Renders the component.
   */
  render() {
    return <div>
        <StatusBar startText="Shipped" endText="Delivered" waypoints={SHIPPING_STATUS_DEMO_WAYPOINTS}></StatusBar>
    </div>
  }
}
