/*
 * Zachary Cook
 *
 * Status window for commission statuses.
 */

import React, { Component } from "react";
import { StatusBar } from "./StatusBar";
import "./Status.css";

// Test data for the commission status.
var COMMISSION_STATUS_DEMO_WAYPOINTS = [
    {
        "position": 0,
        "name": "Commission Started",
        "date": "March 23th, 2020",
        "description": "Your commission has been started.",
    },
    {
        "position": 0.2,
        "name": "Progress update",
        "date": "March 24th, 2020",
        "description": "Finished a section of the thing",
        "img": "chat/no-profile-picture.png",
    },
    {
        "position": 0.45,
        "name": "Another progress update",
        "date": "March 27th, 2020",
        "description": "Finished another section of the thing",
        "img": "chat/no-profile-picture.png",
    },
]



export class CommissionStatus extends Component {
  /*
   * Renders the component.
   */
  render() {
    return <div>
        <StatusBar startText="Started" endText="Completed" waypoints={COMMISSION_STATUS_DEMO_WAYPOINTS}></StatusBar>
    </div>
  }
}
