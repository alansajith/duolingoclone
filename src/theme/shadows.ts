/**
 * Lingua Design System - Shadow & Elevation Tokens
 * Follows AGENTS.md style exception rules for iOS shadow and Android elevation
 */

import { Platform, ViewStyle } from "react-native";

export const shadows = {
  sm: Platform.select<ViewStyle>({
    ios: {
      shadowColor: "#0D132B",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    android: {
      elevation: 1,
    },
    default: {
      shadowColor: "#0D132B",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
  }),
  md: Platform.select<ViewStyle>({
    ios: {
      shadowColor: "#0D132B",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
    },
    android: {
      elevation: 3,
    },
    default: {
      shadowColor: "#0D132B",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
    },
  }),
  lg: Platform.select<ViewStyle>({
    ios: {
      shadowColor: "#0D132B",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 8,
    },
    android: {
      elevation: 6,
    },
    default: {
      shadowColor: "#0D132B",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 8,
    },
  }),
  primaryButton: Platform.select<ViewStyle>({
    ios: {
      shadowColor: "#6C4EF5",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
    },
    android: {
      elevation: 4,
    },
    default: {
      shadowColor: "#6C4EF5",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.25,
      shadowRadius: 8,
    },
  }),
} as const;
