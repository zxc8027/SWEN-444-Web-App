/*
 * Zachary Cook
 *
 * Status bar and information for displaying status information.
 */

import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class StatusBar extends Component {
  /*
   * Renders the component.
   */
  render() {
    // Determine the markers.
    var fillAmount = 0;
    var markers = [];
    var lastPercentage = 0;
    for (var i = 0; i <  this.props["waypoints"].length; i++) {
        var waypoint = this.props["waypoints"][i];

        // Set the fill amount if it is the max position.
        if (waypoint["position"] > fillAmount) {
            fillAmount = waypoint["position"];
        }

        // Add the marker.
        if (waypoint["position"] != 0 &&  waypoint["position"] != 1) {
            markers.push(<div className="status-bar-marker" style={ { "left": "calc(" + ((waypoint["position"] - lastPercentage - fillAmount) * 100) + "% + 1.5rem)" } }></div>)
            lastPercentage = waypoint["position"];
        }
    }

    // Determine the labels.
    var labels = [];
    for (var i = this.props["waypoints"].length - 1; i >= 0; i += -1) {
        var waypoint = this.props["waypoints"][i];

        // Add the label.
        labels.push(<Card>
            <Card.Header as="h5">{ waypoint["name"] + " (" + waypoint["date"] + ")" }</Card.Header>
            <Card.Body>
                <img className="status-bar-image" src={ waypoint["img"] }></img>
                <Card.Text>{ waypoint["description"] }</Card.Text>
            </Card.Body>
          </Card>)
    }

    // Create the status bar and waypoints.
    return <div>
        <div className="status-bar-left-text">{ this.props["startText"] }</div>
        <div className="status-bar-right-text">{ this.props["endText"] }</div>
        <div className="status-bar-background">
            <div className="status-bar-fill" style={ { width: (fillAmount * 100) + "%" } }>
                { markers }
            </div>
        </div>
        {labels}
    </div>
  }
}
