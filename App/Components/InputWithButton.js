import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import styles from "./Styles/InputWithButtonStyle";
import { Colors } from "../Themes";

export default class InputWithButton extends Component {
  constructor(props) {
    super(props);
  }

  // Prop type warnings
  static propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
  };

  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.props.onPress}
          style={styles.buttonContainer}
          underlayColor={Colors.panther}
        >
          <Text style={styles.buttonText}>{this.props.buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.separator} />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          {...this.props}
        />
      </View>
    );
  }
}
