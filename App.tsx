import React from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Dashboard } from "./src/screens/Dashboard";
import { COLORS } from "./src/themes/colors";
import { DayDetails } from "./src/screens/DayDetails";
import { NavigationContainer } from "@react-navigation/native";

import dayjs from "dayjs";
import "dayjs/locale/pl";
import isToday from "dayjs/plugin/isToday";

dayjs.extend(isToday);
dayjs.locale("pl");

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <SafeAreaView style={styles.container}>
          {/* <Dashboard/> */}
          <DayDetails />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
