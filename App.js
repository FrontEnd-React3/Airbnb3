import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import Entype from "react-native-vector-icons/Entypo";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Entype name={"home"} size={24} />
      <SafeAreaView></SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
