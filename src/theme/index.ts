/**
 * Lingua Design System - Theme Index
 * Re-exports all design tokens and theme configuration
 */

import { colors, primaryColors, semanticColors, neutralColors } from "./colors";
import {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  typographyHierarchy,
  textStyles,
} from "./typography";
import { spacing } from "./spacing";
import { borderRadius } from "./borderRadius";
import { shadows } from "./shadows";

export * from "./colors";
export * from "./typography";
export * from "./spacing";
export * from "./borderRadius";
export * from "./shadows";

export const theme = {
  colors,
  primaryColors,
  semanticColors,
  neutralColors,
  fonts: fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  typography: typographyHierarchy,
  textStyles,
  spacing,
  borderRadius,
  shadows,
} as const;

export type Theme = typeof theme;
export default theme;
