import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import styles from "./Styles/HomeStyle";
import { Logo, InputWithButton } from "../Components";
import { Colors } from "../Themes";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  handleChangeText = () => {
    console.log("change text");
  };

  handlePressBaseCurrency = () => {
    console.log("press base currency");
  };

  handlePressQuoteCurrency = () => {
    console.log("press quote currency");
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={false}
          backgroundColor={Colors.facebook}
          barStyle="light-content"
        />
        <Logo />
        <InputWithButton
          buttonText={TEMP_BASE_CURRENCY}
          onPress={this.handlePressBaseCurrency}
          defaultValue={TEMP_BASE_PRICE}
          keyboardType="numeric"
          onChangeText={this.handleChangeText}
        />
        <InputWithButton
          editable={false}
          buttonText={TEMP_QUOTE_CURRENCY}
          onPress={this.handlePressQuoteCurrency}
          value={TEMP_QUOTE_PRICE}
        />
      </View>
    );
  }
}
