import React from "react";
import { View, ViewProps } from "react-native";
import { createThemedStyles } from "../theme";

interface ThemedCardProps extends ViewProps {
  children: React.ReactNode;
}

export const ThemedCard: React.FC<ThemedCardProps> = ({
  children,
  style,
  ...props
}) => {
  const styles = useStyles();

  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

const useStyles = createThemedStyles((theme) => ({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    padding: theme.spacing.md,
    marginVertical: theme.spacing.sm,
    shadowColor: theme.colors.text,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
}));
