import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Root";
import { COLORS } from "../themes/colors";

export const SelectLocation = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [value, setValue] = useState("");
  const [list, setList] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Wpisz lokalizację"
        placeholderTextColor={COLORS.text}
        selectionColor={COLORS.text}
        style={styles.input}
        onChangeText={setValue}
        value={value}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setList([...list, value]);
        }}
      >
        <Text style={styles.buttonText}>Dodaj</Text>
      </TouchableOpacity>
      {list.map((item) => (
        <Text>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.link,
    padding: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    color: COLORS.text,
    borderRadius: 10,
  },
  button: {
    width: "100%",
    backgroundColor: COLORS.link,
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.text,
    fontSize: 16,
  },
});
