import {
    Alert,
    TouchableOpacity,
    StyleSheet,
  } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from "../themes/colors";
import * as Location from 'expo-location';

export const SelectLocationByCoordinates = () => {

  const onButtonPress= async () =>{

    const { status } = await Location.requestForegroundPermissionsAsync();

    if(status === Location.PermissionStatus.DENIED) {
      Alert.alert("Brak uprawnień", "Aby móc korzystać z funkcjonalności przejdz do ustawień i pozwól na pobranie lokalizacji.")
    } if (status === Location.PermissionStatus.GRANTED) {
      const location = await Location.getCurrentPositionAsync();
      console.log(location)
    }

    console.log(status);
  }

  return (
    <TouchableOpacity style={styles.button} onPress={onButtonPress}>
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