import React, { Component } from "react";

export class Gallery extends Component {
  static displayName = Gallery.name;

  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {};

  render() {
    return <div></div>;
  }
}
