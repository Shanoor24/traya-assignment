import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center"
  },
  formContainer: {
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
  backButton: {
    backgroundColor: "#CFE499",
    width: responsiveWidth(20),
    height: responsiveWidth(8),
    borderTopRightRadius: responsiveWidth(4),
    borderBottomLeftRadius: responsiveWidth(4),
    justifyContent: "center",
    alignItems: "center",
  },
  backButtonText: {
    color: "#FFFFFF",
    fontSize: responsiveFontSize(2),
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
  bottomsheetContainer: {
    borderTopLeftRadius: responsiveWidth(5),
    borderTopRightRadius: responsiveWidth(5),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    paddingVertical: responsiveHeight(2),
    paddingHorizontal: responsiveWidth(7),
  },
  bottomSheetView: {
    justifyContent: "center",
    alignItems: "center",
  },
  celebrationImage: {
    width: responsiveWidth(55),
    height: responsiveWidth(50),
    // borderWidth: 1,
    // borderColor: "red",
  },
  ThankyouText: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(0.5),
    textAlign: "center",
    color: "#707374",
    fontWeight: "500",
  },
  loginButton: {
    width: responsiveWidth(35),
    backgroundColor: "#CFE499",
    marginTop: responsiveHeight(7.5),
    justifyContent: "center",
    alignItems: "center",
    height: responsiveHeight(5.5),
    borderRadius: responsiveWidth(2),
    // marginTop: responsiveHeight()
  },
  buttonText: {
    fontSize: responsiveFontSize(2.5),
    color: "#FFFFFF",
    fontWeight: 800,
  },
});
