import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#4daf7c",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    paddingHorizontal: responsiveWidth(4),
    paddingBottom: responsiveHeight(1.5),
    borderTopRightRadius: responsiveWidth(10),
    borderBottomLeftRadius: responsiveWidth(10),
  },
  text: {
    color: "#FFFFFF",
    fontSize: responsiveFontSize(8),
    fontWeight: 900,
  },
});
