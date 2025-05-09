import { StatusBar } from "react-native";
import { useTheme } from "../theme";

/**
 * StatusBarTheme.tsx
 * Component to handle theme-based StatusBar styling
 */
export const StatusBarTheme: React.FC = () => {
  const theme = useTheme();
  return (
    <StatusBar
      barStyle={theme.colorMode === "dark" ? "light-content" : "dark-content"}
    />
  );
};
