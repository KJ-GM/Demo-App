import React from "react";
import { Pressable, View } from "react-native";
import { useTheme, useToggleThemeMode } from "../theme";
import { Feather } from "@expo/vector-icons";
import { createThemedStyles } from "../theme";

export const ThemeToggle = () => {
  const toggleTheme = useToggleThemeMode();
  const theme = useTheme();
  const styles = useStyles();
  const icon = theme.colorMode === "light" ? "moon" : "sun";

  return (
    <Pressable onPress={toggleTheme} style={styles.button}>
      <Feather name={icon} size={20} color={theme.colors.primary} />
    </Pressable>
  );
};

const useStyles = createThemedStyles((theme) => ({
  button: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colors.surface,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: theme.colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  // Add any other styles you need here
  myStyle: {
    color: theme.colors.onPrimary,
    margin: theme.spacing.sm,
  },
}));
