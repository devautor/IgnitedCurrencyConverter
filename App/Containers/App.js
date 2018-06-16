import "../Config";
import DebugConfig from "../Config/DebugConfig";
import React, { Component } from "react";
import RootContainer from "./RootContainer";
// import { Provider } from "react-redux";
// import createStore from "../Redux";
import Reactotron from "reactotron-react-native";

// create our store
// const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    Reactotron.log("Containers/App.js: hello rendering world");
    return <RootContainer />;
  }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
