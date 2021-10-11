import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

export const FilterDrawerLayout = () => {
  console.log("soy drawer")
  return(
    <>{console.log("soy drawer")}</>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});