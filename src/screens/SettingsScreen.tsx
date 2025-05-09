import React from "react";
import { View, Switch, ScrollView, Text } from "react-native";
import {
  useTheme,
  useThemeMode,
  useToggleThemeMode,
  useCycleThemeMode,
  useSetThemeMode,
  useResetThemeMode,
  createThemedStyles,
} from "../theme";
import { ThemedText } from "../components/ThemedText";
import { ThemedCard } from "../components/ThemedCard";
import { ThemedButton } from "../components/ThemedButton";

const useStyles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.spacing.lg,
  },
  section: {
    marginBottom: theme.spacing.lg,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing.sm,
    marginTop: theme.spacing.sm,
  },
  infoText: {
    marginTop: theme.spacing.sm,
  },
}));

export const SettingsScreen = () => {
  const styles = useStyles();
  const mode = useThemeMode(); // 'light' | 'dark' | 'system'
  const theme = useTheme(); // actual theme in use
  const toggleMode = useToggleThemeMode(); // toggles light <-> dark only
  const cycleMode = useCycleThemeMode(); // cycles light → dark → system
  const setMode = useSetThemeMode();
  const resetMode = useResetThemeMode();

  return (
    <ScrollView>
      <View style={styles.container}>
        <ThemedText>Theme Settings</ThemedText>

        {/* Current Theme Info */}
        <View style={styles.section}>
          <ThemedCard>
            <ThemedText variant="subheading">Current Theme Info</ThemedText>
            <ThemedText variant="body" style={styles.infoText}>
              Selected Mode:{" "}
              <ThemedText style={{ fontWeight: "bold" }}>{mode}</ThemedText>
            </ThemedText>
            <ThemedText variant="body" style={styles.infoText}>
              App Theme in Use:{" "}
              <ThemedText style={{ fontWeight: "bold" }}>
                {theme.colorMode}
              </ThemedText>
            </ThemedText>
            {mode === "system" && (
              <ThemedText variant="caption" style={styles.infoText}>
                ⚙️ System theme is currently:{" "}
                <ThemedText style={{ fontWeight: "bold" }}>
                  {theme.colorMode}
                </ThemedText>
              </ThemedText>
            )}
          </ThemedCard>
        </View>

        {/* Light/Dark Toggle */}
        <View style={styles.section}>
          <ThemedCard>
            <View style={styles.row}>
              <ThemedText variant="subheading">Dark Mode Toggle</ThemedText>
              <Switch
                value={mode === "dark"}
                onValueChange={toggleMode}
                disabled={mode === "system"}
              />
            </View>
            <ThemedText variant="caption" style={styles.infoText}>
              Toggle manually between Light and Dark (disabled in System mode).
            </ThemedText>
          </ThemedCard>
        </View>

        {/* Cycle Theme Mode */}
        <View style={styles.section}>
          <ThemedCard>
            <ThemedText variant="subheading">Cycle Theme Mode</ThemedText>
            <ThemedButton
              title="Cycle Mode"
              onPress={cycleMode}
              variant="secondary"
            />
            <ThemedText variant="caption" style={styles.infoText}>
              Cycles through: Light → Dark → System
            </ThemedText>
          </ThemedCard>
        </View>

        {/* Set Mode Buttons */}
        <View style={styles.section}>
          <ThemedCard>
            <ThemedText variant="subheading">Set Mode Directly</ThemedText>
            <View style={styles.buttonsRow}>
              <ThemedButton
                title="Light"
                onPress={() => setMode("light")}
                variant={mode === "light" ? "primary" : "secondary"}
              />
              <ThemedButton
                title="Dark"
                onPress={() => setMode("dark")}
                variant={mode === "dark" ? "primary" : "secondary"}
              />
              <ThemedButton
                title="System"
                onPress={() => setMode("system")}
                variant={mode === "system" ? "primary" : "secondary"}
              />
            </View>
          </ThemedCard>
        </View>

        {/* Reset Button */}
        <View style={styles.section}>
          <ThemedButton
            title="Reset Theme to Default"
            onPress={resetMode}
            variant="secondary"
          />
        </View>
      </View>
    </ScrollView>
  );
};
