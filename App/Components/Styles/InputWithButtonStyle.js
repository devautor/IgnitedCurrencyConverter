import { StyleSheet } from "react-native";
import { Colors } from "../../Themes";

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: "90%",
    height: INPUT_HEIGHT,
    // buttonContainer, separator, and inputBox in a row
    flexDirection: "row",
    // place each item at the center of its column
    alignItems: "center",
    borderRadius: BORDER_RADIUS,
    marginVertical: 11
  },
  containerDisabled: {
    backgroundColor: Colors.frost
  },
  buttonContainer: {
    // width will be equal to text's spacing
    height: INPUT_HEIGHT,
    // button's text will be centered by row & column both
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
    borderRadius: BORDER_RADIUS
    // borderBottomLeftRadius: BORDER_RADIUS
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
    paddingHorizontal: 16,
    color: Colors.facebook
  },
  separator: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: Colors.windowTint
  },
  input: {
    // input box will take all of remaining (from buttonContainer, in container) row space
    flex: 1,
    height: INPUT_HEIGHT,
    borderTopRightRadius: BORDER_RADIUS,
    paddingHorizontal: 8,
    color: Colors.text,
    fontSize: 18
  }
});
