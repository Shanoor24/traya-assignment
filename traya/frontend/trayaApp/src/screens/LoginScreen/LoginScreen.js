import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Login from "../../components/Login/Login";

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}
