import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../themes/colors";

interface SearchInputProps {
    onSearch: (value: string) => void;

}

export const SearchInput = ({onSearch}:SearchInputProps) => {
    const [value, setValue] = useState("");

    const onSearchPress = () => {
        onSearch(value)
        setValue("");
    }

  return (
    <>
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
        onPress={onSearchPress}
      >
        <Text style={styles.buttonText}>Dodaj</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
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
    }
});