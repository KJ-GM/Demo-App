import { createAppTheme } from "theme-csx";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { typography } from "./typography";

const theme = {
  colors,
  spacing,
  typography,
};

export const {
  AppThemeProvider,
  useTheme,
  useThemeMode,
  useSetThemeMode,
  useResetThemeMode,
  useToggleThemeMode,
  useCycleThemeMode,
  createThemedStyles,
  types,
} = createAppTheme(theme);

export type Theme = typeof types.Theme;
export type ThemeMode = typeof types.ThemeMode;
