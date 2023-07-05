import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Register from "../../components/Register/Register";

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Register />
    </SafeAreaView>
  );
}
