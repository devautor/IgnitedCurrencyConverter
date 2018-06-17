import { StyleSheet } from "react-native";
import { Colors } from "../../Themes";
import { Dimensions } from "react-native";

const imageWidth = Dimensions.get("window").width / 2;

export default StyleSheet.create({
  container: {
    alignItems: "center"
  },
  containerImage: {
    alignItems: "center",
    justifyContent: "center",
    width: imageWidth,
    height: imageWidth
  },
  logo: {
    width: imageWidth / 2
  },
  text: {
    color: Colors.text,
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    fontWeight: "600"
  }
});
