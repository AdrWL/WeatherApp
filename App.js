import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Dashboard } from "./src/screens/Dashboard";
import { COLORS } from "./src/themes/colors";

export default function App() {

  return (
      <SafeAreaProvider>
        <StatusBar style="light"/>
        <SafeAreaView style={styles.container}>
            <Dashboard/>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
});
