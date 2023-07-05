import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Register from "../../components/Register/Register";
import Ratings from "../../components/Ratings/Ratings";

export default function RatingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Ratings />
    </SafeAreaView>
  );
}
