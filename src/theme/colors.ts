/**
 * Lingua Design System - Color Tokens
 * Generated based on the Lingua Design Theme (prompt_material/01-design-system.png)
 */

export const primaryColors = {
  linguaPurple: "#6C4EF5",
  linguaDeepPurple: "#5B3BF6",
  linguaBlue: "#4D8BFF",
  linguaGreen: "#21C16B",
} as const;

export const semanticColors = {
  success: "#21C16B",
  warning: "#FFC800",
  streak: "#FF8A00",
  error: "#FF4D4F",
  info: "#4D8BFF",
} as const;

export const neutralColors = {
  textPrimary: "#0D132B",
  textSecondary: "#6B7280",
  border: "#E5E7EB",
  surface: "#F6F7FB",
  background: "#FFFFFF",
} as const;

/**
 * Combined colors dictionary containing all color tokens
 */
export const colors = {
  // Primary
  ...primaryColors,

  // Semantic
  ...semanticColors,

  // Neutrals
  ...neutralColors,

  // Convenient Aliases
  primary: primaryColors.linguaPurple,
  primaryDark: primaryColors.linguaDeepPurple,
  secondary: neutralColors.textSecondary,
} as const;

export type PrimaryColorKey = keyof typeof primaryColors;
export type SemanticColorKey = keyof typeof semanticColors;
export type NeutralColorKey = keyof typeof neutralColors;
export type ColorKey = keyof typeof colors;
