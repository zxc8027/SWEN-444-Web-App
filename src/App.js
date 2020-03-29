import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home/Home.jsx";
import { Gallery } from "./components/Gallery/Gallery.jsx";
import { CommissionStatus } from "./components/Status/CommissionStatus";
import { ShippingStatus } from "./components/Status/ShippingStatus";
import { PaymentOptions } from "./components/Payment/PaymentOptions";
import { PaymentAdd } from "./components/Payment/PaymentAdd";
import { PaymentComplete } from "./components/Payment/PaymentComplete";
import { AccountCreate } from "./components/Account/AccountCreate";

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
        <Route exact path="/payment/add" component={PaymentAdd} />
        <Route exact path="/payment/complete" component={PaymentComplete} />
        <Route exact path="/account/create" component={AccountCreate} />
      </Layout>
    );
  }
}
