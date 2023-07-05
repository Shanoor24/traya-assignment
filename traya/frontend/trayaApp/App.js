import React from "react";
import { StyleSheet } from "react-native";
import Navigator from "./src/Navigation";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <Navigator />
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
