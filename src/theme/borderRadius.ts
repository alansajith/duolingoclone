/**
 * Lingua Design System - Border Radius Tokens
 */

export const borderRadius = {
  none: 0,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  "2xl": 20,
  "3xl": 24,
  full: 9999,
} as const;

export type BorderRadiusKey = keyof typeof borderRadius;
