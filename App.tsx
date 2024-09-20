import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS } from "./src/themes/colors";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import 'react-native-get-random-values';

import dayjs from "dayjs";
import "dayjs/locale/pl";
import isToday from "dayjs/plugin/isToday";
import { Root } from "./src/navigation/Root";

dayjs.extend(isToday);
dayjs.locale("pl");

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: COLORS.background,
    card: COLORS.background,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <SafeAreaProvider>
        <StatusBar style="light" />
          <Root />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}