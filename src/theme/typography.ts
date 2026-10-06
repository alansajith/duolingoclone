/**
 * Lingua Design System - Typography Tokens
 * Generated based on the Lingua Design Theme (prompt_material/01-design-system.png)
 */

import { TextStyle } from "react-native";

export const fontFamilies = {
  regular: "Poppins-Regular",
  medium: "Poppins-Medium",
  semiBold: "Poppins-SemiBold",
  bold: "Poppins-Bold",
} as const;

export const fontWeights = {
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
} as const;

export const fontSizes = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 16,
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 13,
  caption: 11,
} as const;

export const lineHeights = {
  h1: 38.4, // 32 * 1.2
  h2: 31.2, // 24 * 1.3
  h3: 26.0, // 20 * 1.3
  h4: 22.4, // 16 * 1.4
  bodyLarge: 25.6, // 16 * 1.6
  bodyMedium: 22.4, // 14 * 1.6
  bodySmall: 20.8, // 13 * 1.6
  caption: 15.4, // 11 * 1.4
} as const;

export interface TypographyToken {
  name: string;
  usage: string;
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
  fontWeight: TextStyle["fontWeight"];
  className: string;
}

export const typographyHierarchy: Record<
  "h1" | "h2" | "h3" | "h4" | "bodyLarge" | "bodyMedium" | "bodySmall" | "caption",
  TypographyToken
> = {
  h1: {
    name: "H1",
    usage: "Page / Screen Title",
    fontSize: fontSizes.h1,
    lineHeight: lineHeights.h1,
    fontFamily: fontFamilies.bold,
    fontWeight: "700",
    className: "text-h1",
  },
  h2: {
    name: "H2",
    usage: "Section Title",
    fontSize: fontSizes.h2,
    lineHeight: lineHeights.h2,
    fontFamily: fontFamilies.semiBold,
    fontWeight: "600",
    className: "text-h2",
  },
  h3: {
    name: "H3",
    usage: "Card / Module Title",
    fontSize: fontSizes.h3,
    lineHeight: lineHeights.h3,
    fontFamily: fontFamilies.semiBold,
    fontWeight: "600",
    className: "text-h3",
  },
  h4: {
    name: "H4",
    usage: "Subheading",
    fontSize: fontSizes.h4,
    lineHeight: lineHeights.h4,
    fontFamily: fontFamilies.medium,
    fontWeight: "500",
    className: "text-h4",
  },
  bodyLarge: {
    name: "Body Large",
    usage: "Important content",
    fontSize: fontSizes.bodyLarge,
    lineHeight: lineHeights.bodyLarge,
    fontFamily: fontFamilies.regular,
    fontWeight: "400",
    className: "text-body-large",
  },
  bodyMedium: {
    name: "Body Medium",
    usage: "Body text",
    fontSize: fontSizes.bodyMedium,
    lineHeight: lineHeights.bodyMedium,
    fontFamily: fontFamilies.regular,
    fontWeight: "400",
    className: "text-body-medium",
  },
  bodySmall: {
    name: "Body Small",
    usage: "Supporting text",
    fontSize: fontSizes.bodySmall,
    lineHeight: lineHeights.bodySmall,
    fontFamily: fontFamilies.regular,
    fontWeight: "400",
    className: "text-body-small",
  },
  caption: {
    name: "Caption",
    usage: "Labels, meta text",
    fontSize: fontSizes.caption,
    lineHeight: lineHeights.caption,
    fontFamily: fontFamilies.regular,
    fontWeight: "400",
    className: "text-caption",
  },
} as const;

/**
 * React Native StyleSheet text style definitions for cases where
 * StyleSheet / inline styles are required (per AGENTS.md style exception rules).
 */
export const textStyles: Record<keyof typeof typographyHierarchy, TextStyle> = {
  h1: {
    fontFamily: fontFamilies.bold,
    fontSize: fontSizes.h1,
    lineHeight: lineHeights.h1,
    fontWeight: "700",
  },
  h2: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.h2,
    lineHeight: lineHeights.h2,
    fontWeight: "600",
  },
  h3: {
    fontFamily: fontFamilies.semiBold,
    fontSize: fontSizes.h3,
    lineHeight: lineHeights.h3,
    fontWeight: "600",
  },
  h4: {
    fontFamily: fontFamilies.medium,
    fontSize: fontSizes.h4,
    lineHeight: lineHeights.h4,
    fontWeight: "500",
  },
  bodyLarge: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.bodyLarge,
    lineHeight: lineHeights.bodyLarge,
    fontWeight: "400",
  },
  bodyMedium: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.bodyMedium,
    lineHeight: lineHeights.bodyMedium,
    fontWeight: "400",
  },
  bodySmall: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.bodySmall,
    lineHeight: lineHeights.bodySmall,
    fontWeight: "400",
  },
  caption: {
    fontFamily: fontFamilies.regular,
    fontSize: fontSizes.caption,
    lineHeight: lineHeights.caption,
    fontWeight: "400",
  },
};
