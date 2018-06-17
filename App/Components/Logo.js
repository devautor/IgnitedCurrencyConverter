import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { View, Text, ImageBackground, Image } from "react-native";
import styles from "./Styles/LogoStyle";
import { Images } from "../Themes";

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="contain"
          style={styles.containerImage}
          source={Images.background}
        >
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={Images.ccLogo}
          />
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}
