import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Pressable,
  Keyboard,
  Image,
} from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { register } from "../../utils/apiServices";
import RBSheet from "react-native-raw-bottom-sheet";
import { responsiveHeight } from "react-native-responsive-dimensions";

const Register = () => {
  const navigation = useNavigation();
  const initialUserDetails = {
    name: "",
    email: "",
    password: "",
    lastOrder: {
      name: "Hair Ras Ayurvedic Hair Herbs | 100% Natural Hair Supplement with Bhringraj",
      imageUrl: "https://imgur.com/wi97IOz",
      rating: 0,
      review: "empty",
    },
  };
  const [userDetials, setUserDetails] = useState(initialUserDetails);
  const [errorMessage, setErrorMessage] = useState("");

  const handleOnChange = (text, fieldName) => {
    setErrorMessage("");
    setUserDetails((prev) => ({ ...userDetials, [fieldName]: text }));
  };

  const handleRegister = async () => {
    Keyboard.dismiss();
    if (userDetials.email.trim() === "" || userDetials.password.trim() === "") {
      setErrorMessage("Please fill the required fields");
      return;
    }

    const response = await register(userDetials);

    console.log(response);
    if (response.hasOwnProperty("error")) {
      let statusCode = response?.error?.response?.status;
      console.log(response?.error?.response?.status);
      if (statusCode === 409) {
        setErrorMessage("User already registered, Please login!");
        return;
      }
      setErrorMessage("Something went wrong!");
      return;
    }

    this.RBSheet.open();
    setUserDetails(initialUserDetails);
  };

  const handleLogin = () => {
    this.RBSheet.close();
    navigation.navigate("LoginScreen");
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.formContainer}>
        <Text style={styles.heading}>Sign up</Text>
        <View style={styles.subcontainer}>
          <TextInput
            onChangeText={(text) => handleOnChange(text, "name")}
            style={styles.inputfield}
            placeholder="Name"
          />
          <TextInput
            onChangeText={(text) => handleOnChange(text, "email")}
            style={styles.inputfield}
            placeholder="Email"
          />
          <TextInput
            onChangeText={(text) => handleOnChange(text, "password")}
            style={styles.inputfield}
            placeholder="Password"
          />
          <Button onPress={handleRegister} title="Submit" color="#CFE499" />
        </View>
        {errorMessage && (
          <View>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        )}
      </SafeAreaView>

      <RBSheet
        ref={(ref) => {
          this.RBSheet = ref;
        }}
        height={responsiveHeight(50)}
        customStyles={{
          container: styles.bottomsheetContainer,
          draggableIcon: {
            backgroundColor: "#000000",
          },
        }}
        closeOnPressMask={false}
        closeOnPressBack={false}
      >
        <View style={styles.bottomSheetView}>
          <Image
            source={require("../../assets/images/celebration.png")}
            style={styles.celebrationImage}
          />
          <Text style={styles.ThankyouText}>Registration Successfull!</Text>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </Pressable>
  );
};

export default Register;
