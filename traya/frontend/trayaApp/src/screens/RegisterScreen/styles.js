import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default styles = StyleSheet.create({
  container: {
    backgroundColor: "#D2FCC3",
    flex: 1,
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(3),
  },
});
