import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Root";

export const SelectLocation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("LocationDetails")}>
        <Text>SelectLocation</Text>
      </TouchableOpacity>
    </View>
  );
};
