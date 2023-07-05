import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Register from "../../components/Register/Register";
import Feedback from "../../components/Feedback/Feedback";

export default function DetailedReview() {
  return (
    <SafeAreaView style={styles.container}>
      <Feedback />
    </SafeAreaView>
  );
}
