/**
 * Centralized image imports per AGENTS.md guidelines.
 */

import mascotLogo from "@/assets/images/mascot-logo.png";
import moscotLogo from "@/assets/images/moscot-logo.png";
import mascotAuth from "@/assets/images/mascot-auth.png";
import mascotWelcome from "@/assets/images/mascot-welcome.png";
import streakFire from "@/assets/images/streak-fire.png";
import earth from "@/assets/images/earth.png";
import palace from "@/assets/images/palace.png";
import treasure from "@/assets/images/treasure.png";
import icon from "@/assets/images/icon.png";
import splashIcon from "@/assets/images/splash-icon.png";
import favicon from "@/assets/images/favicon.png";
import googleIcon from "@/assets/images/google-icon.png";
import facebookIcon from "@/assets/images/facebook-icon.png";
import appleIcon from "@/assets/images/apple-icon.png";
import sparkle from "@/assets/images/sparkle.png";
import eye from "@/assets/images/eye.png";
import eyeOff from "@/assets/images/eye-off.png";

export const images = {
  mascotLogo,
  moscotLogo,
  mascotAuth,
  mascotWelcome,
  streakFire,
  earth,
  palace,
  treasure,
  icon,
  splashIcon,
  favicon,
  googleIcon,
  facebookIcon,
  appleIcon,
  sparkle,
  eye,
  eyeOff,
} as const;

export type ImageKey = keyof typeof images;
export default images;
