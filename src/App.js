import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home/Home.jsx";
import { Gallery } from "./components/Gallery/Gallery.jsx";
import { CommissionStatus } from "./components/Status/CommissionStatus";
import { ShippingStatus } from "./components/Status/ShippingStatus";
import { PaymentOptions } from "./components/Payment/PaymentOptions";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/commission/status" component={CommissionStatus} />
        <Route exact path="/shipping/status" component={ShippingStatus} />
        <Route exact path="/payment" component={PaymentOptions} />
        <Route exact path="/login" component={Home} />
      </Layout>
    );
  }
}
