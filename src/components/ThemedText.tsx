import React from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { useTheme } from "../theme";

type Variant = "heading" | "subheading" | "body" | "caption";

interface ThemedTextProps extends TextProps {
  children: React.ReactNode;
  variant?: Variant;
  color?: keyof ReturnType<typeof useTheme>["colors"];
}

export const ThemedText: React.FC<ThemedTextProps> = ({
  children,
  style,
  variant = "body",
  color = "text",
  ...props
}) => {
  const theme = useTheme();
  const textStyle = theme.typography[variant] as TextStyle;

  return (
    <Text
      style={[
        {
          ...textStyle,
          color: theme.colors[color],
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
