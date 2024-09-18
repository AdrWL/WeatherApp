import {
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../themes/colors";

export const SelectLocationByCoordinates = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Ionicons name="location-outline" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightBlue,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    alignSelf: "center"
  }
});