import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../themes/colors";
import { Condition } from "../types/api";

interface ListItemProps {
  isLast: boolean;
  title: string;
  value: string | number;
  condition: Condition;
  onPress: () => void;
}

export const ListItem = ({
  isLast,
  title,
  value,
  condition,
  onPress,
}: ListItemProps) => {
  return (
    <>
      <TouchableOpacity
        disabled={!onPress}
        style={[styles.container, !isLast && styles.separator]}
        onPress={onPress}
      >
        <Text style={styles.content}>{title}</Text>
        <Text style={[styles.content, styles.value]}>{value}</Text>
        <View style={styles.condition}>
          <Image
            source={{
              uri: `https:${condition.icon}`,
            }}
            resizeMode="contain"
            width={40}
            height={40}
          />
        </View>
      </TouchableOpacity>
      <View style={[!isLast && styles.separator]} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 40,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: COLORS.background,
  },
  content: {
    flex: 1,
    color: COLORS.text,
  },
  value: {
    textAlign: "center",
    fontWeight: "600",
  },
  condition: {
    flex: 1,
    alignItems: "flex-end",
  },
});
