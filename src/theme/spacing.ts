/**
 * Lingua Design System - Spacing Tokens
 */

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32,
  "5xl": 40,
  "6xl": 48,
  "7xl": 64,
} as const;

export type SpacingKey = keyof typeof spacing;
