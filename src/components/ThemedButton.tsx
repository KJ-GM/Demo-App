import React from "react";
import {
  Pressable,
  Text,
  ActivityIndicator,
  PressableProps,
} from "react-native";
import { createThemedStyles, useTheme } from "../theme";

interface ThemedButtonProps extends PressableProps {
  title: string;
  loading?: boolean;
  variant?: "primary" | "secondary";
}

export const ThemedButton: React.FC<ThemedButtonProps> = ({
  title,
  loading = false,
  variant = "primary",
  style,
  ...props
}) => {
  const theme = useTheme();
  const styles = useStyles();

  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.secondary;
  const textColor = theme.colorMode === "light" ? "#fff" : theme.colors.surface;

  return (
    <Pressable
      style={[styles.button, { backgroundColor }]}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      )}
    </Pressable>
  );
};

const useStyles = createThemedStyles((theme) => ({
  button: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
}));
