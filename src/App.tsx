import React from "react";
import { AppThemeProvider } from "./theme";
import { AppNavigator } from "./navigation/StackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationProvider } from "./navigation/NavigationProvider";
import { StatusBarTheme } from "./components/StatusBarTheme";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppThemeProvider fallbackTheme="dark" defaultMode="system">
        <NavigationProvider>
          <StatusBarTheme />
          <AppNavigator />
        </NavigationProvider>
      </AppThemeProvider>
    </SafeAreaProvider>
  );
}
