import React, { Component } from "react";

// import ReduxNavigation from "../Navigation/ReduxNavigation";
// import { connect } from "react-redux";
// import StartupActions from "../Redux/StartupRedux";
import { Home } from "../Components";
export default class RootContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Home />;
  }
}
