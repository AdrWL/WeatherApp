import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { COLORS } from "../themes/colors";
import { Condition } from "../types/api";

interface ListItemProps {
  isLast: boolean;
  title: string;
  value: string | number;
  condition: Condition;
}

export const ListItem = ({ isLast, title, value, condition }: ListItemProps) => {
  return (
    <View style={(styles.container, isLast && styles.separator)}>
      <Text style={styles.content}>{title}</Text>
      <Text style={[styles.content, styles.value]}>
        {value}
      </Text>
      <Image
        source={{
          uri: `https:${condition.icon}`,
        }}
        resizeMode="contain"
        width={40}
        height={40}
      />
    </View>
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
});
