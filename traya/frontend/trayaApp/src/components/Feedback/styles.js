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
    fontSize: responsiveFontSize(3),
    marginBottom: responsiveHeight(4),
  },
  subcontainer: {
    // backgroundColor: "#FFFFFF",
    width: responsiveWidth(80),
    height: responsiveHeight(70),
    borderRadius: responsiveWidth(5),
    // borderTopRightRadius: responsiveWidth(10),
    // borderBottomLeftRadius: responsiveWidth(10),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveHeight(2),
    borderWidth: responsiveWidth(1),
    borderColor: "#707374",
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: responsiveWidth(30),
    height: responsiveWidth(45),
  },
  descriptionText: {
    color: "#2C3539",
    textAlign: "center",
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(1.8),
    fontWeight: 500,
    marginBottom: responsiveHeight(1.2),
  },
  text: {
    textAlign: "center",
    color: "#707374",
    fontSize: responsiveFontSize(4),
    fontWeight: 700,
  },
  feedbackInput: {
    backgroundColor: "#FFFFFF",
    // borderWidth: 1,
    width: "100%",
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(1.5),
    height: responsiveHeight(15),
    marginTop: responsiveHeight(2),
    textAlignVertical: "top",
    borderRadius: responsiveWidth(2),
    color: "#000000",
  },
  SubmitButton: {
    width: "100%",
    backgroundColor: "#CFE499",
    marginTop: responsiveHeight(3),
    justifyContent: "center",
    alignItems: "center",
    height: responsiveHeight(5.5),
    borderRadius: responsiveWidth(2),
  },
  errorText: {
    color: "red",
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
  dashboardButton: {
    width: responsiveWidth(45),
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
