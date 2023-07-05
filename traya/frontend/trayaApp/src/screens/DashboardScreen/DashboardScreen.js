import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import Dashboard from "../../components/Dashboard/Dashboard";

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Dashboard />
    </SafeAreaView>
  );
}
