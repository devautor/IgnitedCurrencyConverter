import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { Text } from "react-native-elements";
// import ReduxNavigation from "../Navigation/ReduxNavigation";
// import { connect } from "react-redux";
// import StartupActions from "../Redux/StartupRedux";

// Styles
import styles from "./Styles/RootContainerStyles";

class RootContainer extends Component {
  componentDidMount() {
    // this.props.startup();
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        {/* <ReduxNavigation /> */}
        <Text h2>Hello World! I am native, watch me blow you away!</Text>
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
// const mapDispatchToProps = dispatch => ({
//   startup: () => dispatch(StartupActions.startup())
// });

// export default connect(
//   null,
//   mapDispatchToProps
// )(RootContainer);

export default RootContainer;
