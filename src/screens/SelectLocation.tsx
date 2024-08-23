import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Root";
import { COLORS } from "../themes/colors";
import { SearchInput } from "../components/SearchInput";
import { useLocationList } from "../hooks/useLocationList";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const SelectLocation = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { list, addToList, removeFromList } = useLocationList();

  return (
    <FlatList
      ListHeaderComponent={
        <SearchInput
          onSearch={(value) => addToList({ title: value, value: value })}
        />
      }
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.container}
      data={list}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigate("LocationDetails", { location: item.value })}
        >
          <Text style={styles.itemText}>{item.title}</Text>
          <TouchableOpacity onPress={() => removeFromList(item)}>
            <FontAwesome name="trash-o" size={24} color={COLORS.error} />
          </TouchableOpacity>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    marginBottom: 40,
  },
  item: {
    width: "100%",
    backgroundColor: COLORS.lightBlue,
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: COLORS.text,
    fontSize: 16,
  },
});
