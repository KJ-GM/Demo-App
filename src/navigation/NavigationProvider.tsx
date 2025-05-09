import {
  NavigationContainer,
  NavigationContainerProps,
} from "@react-navigation/native";

import { useTheme } from "../theme";
import { View } from "react-native";
import { Theme as NavigationTheme } from "@react-navigation/native";
export const useNavigationTheme = (): NavigationTheme => {
  const theme = useTheme();

  return {
    dark: theme.colorMode === "dark",
    colors: {
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.surface || theme.colors.background,
      text: theme.colors.text,
      border: theme.colors.border || theme.colors.primary,
      notification: theme.colors.primary,
    },

    fonts: {
      regular: {
        fontFamily: "sans-serif",
        fontWeight: "normal",
      },
      medium: {
        fontFamily: "sans-serif-medium",
        fontWeight: "normal",
      },
      bold: {
        fontFamily: "sans-serif",
        fontWeight: "600",
      },
      heavy: {
        fontFamily: "sans-serif",
        fontWeight: "700",
      },
    },
  };
};

export interface NavigationThemeProviderProps extends NavigationContainerProps {
  children: React.ReactNode;
}

/**
 * Navigation Provider
 * This internal component integrates the app theme/utils with React Navigation
 */
export const NavigationProvider: React.FC<NavigationThemeProviderProps> = ({
  children,
  ...navigationContainerProps
}) => {
  // Create navigation theme from app theme
  const navigationTheme = useNavigationTheme();
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <NavigationContainer
        theme={navigationTheme}
        {...navigationContainerProps}
      >
        {children}
      </NavigationContainer>
    </View>
  );
};
