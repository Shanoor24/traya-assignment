import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 2400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Traya.</Text>
      </View>
    </SafeAreaView>
  );
}
