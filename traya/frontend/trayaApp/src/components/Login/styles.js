import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#707374",
    fontWeight: 900,
    fontSize: responsiveFontSize(6),
    marginBottom: responsiveHeight(4),
  },
  subcontainer: {
    // backgroundColor: "#FFFFFF",
    width: responsiveWidth(80),
    height: responsiveHeight(40),
    // borderRadius: responsiveWidth(5),
    borderTopRightRadius: responsiveWidth(10),
    borderBottomLeftRadius: responsiveWidth(10),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    borderWidth: responsiveWidth(1),
    borderColor: "#707374",
    justifyContent: "center",
  },
  submitButton: {
    color: "#707374",
  },
  signUpTextContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: responsiveHeight(0.5),
  },
  textColor: {
    color: "#707374",
  },
  signUptext: {
    fontWeight: 700,
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
  },
  inputfield: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: responsiveWidth(2.5),
    paddingVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(2),
  },
});
