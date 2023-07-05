import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { login } from "../../utils/apiServices";
import { useRecoilState, useRecoilValue } from "recoil";
import { userDataAtom } from "../../recoil/atom";

const Login = () => {
  const navigation = useNavigation();
  const [loginDetails, setLoginDetial] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useRecoilState(userDataAtom);

  const handleOnChange = (text, fieldName) => {
    setErrorMessage("");
    setLoginDetial((prev) => ({ ...loginDetails, [fieldName]: text }));
  };

  const handleLogin = async () => {
    Keyboard.dismiss();
    if (!loginDetails.email.trim() || !loginDetails.password.trim()) {
      setErrorMessage("All fields are required!");
      return;
    }
    const response = await login(loginDetails);

    if (response.hasOwnProperty("error")) {
      let statusCode = response?.error?.response?.status;
      console.log(response?.error?.response?.status);
      if (statusCode === 404) {
        setErrorMessage("The user doesn't exist!");
        return;
      }
      if (statusCode === 400) {
        setErrorMessage("Incorrect password!");
        return;
      }
      setErrorMessage("Something went wrong!");
      return;
    }

    await setUserData((prev) => response.user);
    await setLoginDetial({ email: "", password: "" });
    navigation.navigate("Dashboard");
  };

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <Text style={{ ...styles.heading }}>Login</Text>
      <View style={styles.subcontainer}>
        <TextInput
          style={styles.inputfield}
          onChangeText={(text) => handleOnChange(text, "email")}
          placeholder="Email"
        />
        <TextInput
          style={styles.inputfield}
          onChangeText={(e) => handleOnChange(e, "password")}
          placeholder="Password"
        />
        <Button onPress={handleLogin} title="Submit" color="#CFE499" />
        <View style={styles.signUpTextContainer}>
          <Text style={styles.textColor}>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("RegisterScreen")}
          >
            <Text style={{ ...styles.textColor, ...styles.signUptext }}>
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {errorMessage && (
        <View>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
    </Pressable>
  );
};

export default Login;
