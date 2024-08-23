import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/Root";
import { COLORS } from "../themes/colors";
import { SearchInput } from "../components/SearchInput";

interface ListItem {
  title: string;
  value: string;
}

export const SelectLocation = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [list, setList] = useState<ListItem[]>([]);

  return (
    <FlatList
       ListHeaderComponent={
          <SearchInput onSearch={(value) => 
             setList([...list, {title: value, value: value}])
            }
            />
      }
      ListHeaderComponentStyle={styles.header}
      contentContainerStyle={styles.container}
      data={list}
      renderItem={({ item })=> (
          <TouchableOpacity style={styles.item} onPress={() => navigate("LocationDetails", {location: item.value})}>
            <Text style={styles.itemText}>{item.title}</Text>
         </TouchableOpacity>
      )}
      keyExtractor={(item) => item.value}
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
  },
  itemText: {
    color: COLORS.text,
    fontSize: 16,
  }
});
