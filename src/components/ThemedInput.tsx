import React from "react";
import { TextInput, TextInputProps } from "react-native";
import { createThemedStyles, useTheme } from "../theme";

export const ThemedInput: React.FC<TextInputProps> = ({ style, ...props }) => {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={theme.colors.muted}
      {...props}
    />
  );
};

const useStyles = createThemedStyles((theme) => ({
  input: {
    backgroundColor: theme.colors.surface,
    color: theme.colors.text,
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    fontSize: 16,
  },
}));
