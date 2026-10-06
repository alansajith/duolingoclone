import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { colors } from "@/theme";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header section */}
        <View className="mb-6">
          <Text className="text-caption font-poppins-semibold tracking-wider text-lingua-purple uppercase">
            Design System
          </Text>
          <Text className="text-h1 text-text-primary">Lingua Theme</Text>
        </View>

        {/* Navigation cards */}
        <View className="mb-6 gap-3">
          <Link href="/onboarding" asChild>
            <TouchableOpacity
              activeOpacity={0.85}
              className="flex-row items-center justify-between rounded-2xl bg-lingua-purple p-4 shadow-sm"
            >
              <View className="flex-row items-center gap-3">
                <Image
                  source={images.mascotLogo}
                  style={styles.navMascotImage}
                  resizeMode="contain"
                />
                <View>
                  <Text className="font-poppins-bold text-base text-white">
                    Onboarding Screen
                  </Text>
                  <Text className="font-poppins text-xs text-white/80">
                    Tap to view onboarding flow
                  </Text>
                </View>
              </View>
              <View className="rounded-full bg-white/20 px-3 py-1.5">
                <Text className="font-poppins-semibold text-xs text-white">
                  Open →
                </Text>
              </View>
            </TouchableOpacity>
          </Link>

          <View className="flex-row gap-3">
            <Link href="/sign-up" asChild className="flex-1">
              <TouchableOpacity
                activeOpacity={0.85}
                className="flex-1 flex-row items-center justify-between rounded-2xl border border-border bg-white p-3.5"
              >
                <View className="flex-row items-center gap-2.5">
                  <Image
                    source={images.mascotAuth}
                    style={styles.navMascotSmall}
                    resizeMode="contain"
                  />
                  <View>
                    <Text className="font-poppins-semibold text-sm text-text-primary">
                      Sign Up
                    </Text>
                    <Text className="font-poppins text-[11px] text-text-secondary">
                      Create account
                    </Text>
                  </View>
                </View>
                <Text className="font-poppins-semibold text-xs text-lingua-purple">
                  →
                </Text>
              </TouchableOpacity>
            </Link>

            <Link href="/sign-in" asChild className="flex-1">
              <TouchableOpacity
                activeOpacity={0.85}
                className="flex-1 flex-row items-center justify-between rounded-2xl border border-border bg-white p-3.5"
              >
                <View className="flex-row items-center gap-2.5">
                  <Image
                    source={images.mascotAuth}
                    style={styles.navMascotSmall}
                    resizeMode="contain"
                  />
                  <View>
                    <Text className="font-poppins-semibold text-sm text-text-primary">
                      Sign In
                    </Text>
                    <Text className="font-poppins text-[11px] text-text-secondary">
                      Welcome back
                    </Text>
                  </View>
                </View>
                <Text className="font-poppins-semibold text-xs text-lingua-purple">
                  →
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>

        {/* ==========================================
            BRAND SECTION
           ========================================== */}
        <View className="mb-8 rounded-2xl border border-border bg-white p-5">
          <Text className="mb-4 text-caption font-poppins-bold tracking-wider text-lingua-purple uppercase">
            Brand
          </Text>
          <View className="flex-row items-center gap-4">
            <Image
              source={images.mascotLogo}
              style={styles.mascotImage}
              resizeMode="contain"
            />
            <Text className="font-poppins-bold text-4xl text-text-primary">
              lingua
            </Text>
          </View>
        </View>

        {/* ==========================================
            COLORS SECTION
           ========================================== */}
        <View className="mb-8 rounded-2xl border border-border bg-white p-5">
          <Text className="mb-5 text-caption font-poppins-bold tracking-wider text-lingua-purple uppercase">
            Colors
          </Text>

          {/* Primary Colors */}
          <Text className="mb-3 text-caption font-poppins-semibold tracking-wider text-text-secondary uppercase">
            Primary
          </Text>
          <View className="mb-6 flex-row flex-wrap gap-3">
            <View className="w-[47%] rounded-xl border border-border bg-surface p-3">
              <View className="mb-2 h-16 w-full rounded-lg bg-lingua-purple" />
              <Text className="font-poppins-semibold text-xs text-text-primary">
                LINGUA PURPLE
              </Text>
              <Text className="font-poppins text-xs text-text-secondary">
                {colors.linguaPurple}
              </Text>
            </View>

            <View className="w-[47%] rounded-xl border border-border bg-surface p-3">
              <View className="mb-2 h-16 w-full rounded-lg bg-lingua-deep-purple" />
              <Text className="font-poppins-semibold text-xs text-text-primary">
                LINGUA DEEP PURPLE
              </Text>
              <Text className="font-poppins text-xs text-text-secondary">
                {colors.linguaDeepPurple}
              </Text>
            </View>

            <View className="w-[47%] rounded-xl border border-border bg-surface p-3">
              <View className="mb-2 h-16 w-full rounded-lg bg-lingua-blue" />
              <Text className="font-poppins-semibold text-xs text-text-primary">
                LINGUA BLUE
              </Text>
              <Text className="font-poppins text-xs text-text-secondary">
                {colors.linguaBlue}
              </Text>
            </View>

            <View className="w-[47%] rounded-xl border border-border bg-surface p-3">
              <View className="mb-2 h-16 w-full rounded-lg bg-lingua-green" />
              <Text className="font-poppins-semibold text-xs text-text-primary">
                LINGUA GREEN
              </Text>
              <Text className="font-poppins text-xs text-text-secondary">
                {colors.linguaGreen}
              </Text>
            </View>
          </View>

          {/* Semantic Colors */}
          <Text className="mb-3 text-caption font-poppins-semibold tracking-wider text-text-secondary uppercase">
            Semantic
          </Text>
          <View className="mb-6 flex-row flex-wrap gap-2">
            <View className="w-[30%] rounded-xl border border-border bg-surface p-2.5">
              <View className="mb-2 h-12 w-full rounded-lg bg-success" />
              <Text className="font-poppins-semibold text-[11px] text-text-primary">
                SUCCESS
              </Text>
              <Text className="font-poppins text-[10px] text-text-secondary">
                {colors.success}
              </Text>
            </View>

            <View className="w-[30%] rounded-xl border border-border bg-surface p-2.5">
              <View className="mb-2 h-12 w-full rounded-lg bg-warning" />
              <Text className="font-poppins-semibold text-[11px] text-text-primary">
                WARNING
              </Text>
              <Text className="font-poppins text-[10px] text-text-secondary">
                {colors.warning}
              </Text>
            </View>

            <View className="w-[30%] rounded-xl border border-border bg-surface p-2.5">
              <View className="mb-2 h-12 w-full rounded-lg bg-streak" />
              <Text className="font-poppins-semibold text-[11px] text-text-primary">
                STREAK
              </Text>
              <Text className="font-poppins text-[10px] text-text-secondary">
                {colors.streak}
              </Text>
            </View>

            <View className="w-[30%] rounded-xl border border-border bg-surface p-2.5">
              <View className="mb-2 h-12 w-full rounded-lg bg-error" />
              <Text className="font-poppins-semibold text-[11px] text-text-primary">
                ERROR
              </Text>
              <Text className="font-poppins text-[10px] text-text-secondary">
                {colors.error}
              </Text>
            </View>

            <View className="w-[30%] rounded-xl border border-border bg-surface p-2.5">
              <View className="mb-2 h-12 w-full rounded-lg bg-info" />
              <Text className="font-poppins-semibold text-[11px] text-text-primary">
                INFO
              </Text>
              <Text className="font-poppins text-[10px] text-text-secondary">
                {colors.info}
              </Text>
            </View>
          </View>

          {/* Neutrals */}
          <Text className="mb-3 text-caption font-poppins-semibold tracking-wider text-text-secondary uppercase">
            Neutrals
          </Text>
          <View className="flex-row flex-wrap gap-2">
            <View className="w-[30%] rounded-xl border border-border bg-surface p-2.5">
              <View className="mb-2 h-12 w-full rounded-lg bg-text-primary" />
              <Text className="font-poppins-semibold text-[11px] text-text-primary">
                TEXT/PRIM
              </Text>
              <Text className="font-poppins text-[10px] text-text-secondary">
                {colors.textPrimary}
              </Text>
            </View>

            <View className="w-[30%] rounded-xl border border-border bg-surface p-2.5">
              <View className="mb-2 h-12 w-full rounded-lg bg-text-secondary" />
              <Text className="font-poppins-semibold text-[11px] text-text-primary">
                TEXT/SEC
              </Text>
              <Text className="font-poppins text-[10px] text-text-secondary">
                {colors.textSecondary}
              </Text>
            </View>

            <View className="w-[30%] rounded-xl border border-border bg-surface p-2.5">
              <View className="mb-2 h-12 w-full rounded-lg bg-border" />
              <Text className="font-poppins-semibold text-[11px] text-text-primary">
                BORDER
              </Text>
              <Text className="font-poppins text-[10px] text-text-secondary">
                {colors.border}
              </Text>
            </View>

            <View className="w-[30%] rounded-xl border border-border bg-white p-2.5">
              <View className="mb-2 h-12 w-full rounded-lg border border-border bg-surface" />
              <Text className="font-poppins-semibold text-[11px] text-text-primary">
                SURFACE
              </Text>
              <Text className="font-poppins text-[10px] text-text-secondary">
                {colors.surface}
              </Text>
            </View>

            <View className="w-[30%] rounded-xl border border-border bg-surface p-2.5">
              <View className="mb-2 h-12 w-full rounded-lg border border-border bg-white" />
              <Text className="font-poppins-semibold text-[11px] text-text-primary">
                BG
              </Text>
              <Text className="font-poppins text-[10px] text-text-secondary">
                {colors.background}
              </Text>
            </View>
          </View>
        </View>

        {/* ==========================================
            TYPOGRAPHY SECTION
           ========================================== */}
        <View className="mb-8 rounded-2xl border border-border bg-white p-5">
          <Text className="mb-2 text-caption font-poppins-bold tracking-wider text-lingua-purple uppercase">
            Typography
          </Text>

          <Text className="font-poppins-semibold text-xs text-text-secondary uppercase">
            Font Family
          </Text>
          <Text className="mb-1 font-poppins-bold text-4xl text-text-primary">
            Poppins
          </Text>
          <Text className="mb-6 font-poppins text-sm leading-relaxed text-text-secondary">
            Poppins is a modern, geometric sans-serif typeface that provides
            excellent readability and a friendly personality.
          </Text>

          {/* Typography Scale Demonstration */}
          <View className="gap-5">
            {/* H1 */}
            <View className="border-b border-border pb-4">
              <View className="mb-1 flex-row items-baseline justify-between">
                <Text className="font-poppins-bold text-base text-lingua-purple">
                  H1
                </Text>
                <Text className="font-poppins text-xs text-text-secondary">
                  32px · Bold · 1.2
                </Text>
              </View>
              <Text className="text-h1 text-text-primary">
                Page / Screen Title
              </Text>
            </View>

            {/* H2 */}
            <View className="border-b border-border pb-4">
              <View className="mb-1 flex-row items-baseline justify-between">
                <Text className="font-poppins-bold text-base text-lingua-purple">
                  H2
                </Text>
                <Text className="font-poppins text-xs text-text-secondary">
                  24px · SemiBold · 1.3
                </Text>
              </View>
              <Text className="text-h2 text-text-primary">Section Title</Text>
            </View>

            {/* H3 */}
            <View className="border-b border-border pb-4">
              <View className="mb-1 flex-row items-baseline justify-between">
                <Text className="font-poppins-bold text-base text-lingua-purple">
                  H3
                </Text>
                <Text className="font-poppins text-xs text-text-secondary">
                  20px · SemiBold · 1.3
                </Text>
              </View>
              <Text className="text-h3 text-text-primary">
                Card / Module Title
              </Text>
            </View>

            {/* H4 */}
            <View className="border-b border-border pb-4">
              <View className="mb-1 flex-row items-baseline justify-between">
                <Text className="font-poppins-bold text-base text-lingua-purple">
                  H4
                </Text>
                <Text className="font-poppins text-xs text-text-secondary">
                  16px · Medium · 1.4
                </Text>
              </View>
              <Text className="text-h4 text-text-primary">Subheading</Text>
            </View>

            {/* Body Large */}
            <View className="border-b border-border pb-4">
              <View className="mb-1 flex-row items-baseline justify-between">
                <Text className="font-poppins-bold text-base text-lingua-purple">
                  Body Large
                </Text>
                <Text className="font-poppins text-xs text-text-secondary">
                  16px · Regular · 1.6
                </Text>
              </View>
              <Text className="text-body-large text-text-primary">
                Important content
              </Text>
            </View>

            {/* Body Medium */}
            <View className="border-b border-border pb-4">
              <View className="mb-1 flex-row items-baseline justify-between">
                <Text className="font-poppins-bold text-base text-lingua-purple">
                  Body Medium
                </Text>
                <Text className="font-poppins text-xs text-text-secondary">
                  14px · Regular · 1.6
                </Text>
              </View>
              <Text className="text-body-medium text-text-primary">
                Body text
              </Text>
            </View>

            {/* Body Small */}
            <View className="border-b border-border pb-4">
              <View className="mb-1 flex-row items-baseline justify-between">
                <Text className="font-poppins-bold text-base text-lingua-purple">
                  Body Small
                </Text>
                <Text className="font-poppins text-xs text-text-secondary">
                  13px · Regular · 1.6
                </Text>
              </View>
              <Text className="text-body-small text-text-primary">
                Supporting text
              </Text>
            </View>

            {/* Caption */}
            <View className="pb-1">
              <View className="mb-1 flex-row items-baseline justify-between">
                <Text className="font-poppins-bold text-base text-lingua-purple">
                  Caption
                </Text>
                <Text className="font-poppins text-xs text-text-secondary">
                  11px · Regular · 1.4
                </Text>
              </View>
              <Text className="text-caption text-text-secondary">
                Labels, meta text
              </Text>
            </View>
          </View>
        </View>

        {/* ==========================================
            BEM UTILITIES & UI PREVIEWS
           ========================================== */}
        <View className="mb-8 rounded-2xl border border-border bg-white p-5">
          <Text className="mb-4 text-caption font-poppins-bold tracking-wider text-lingua-purple uppercase">
            BEM Component Utilities
          </Text>

          {/* Buttons */}
          <Text className="mb-3 text-caption font-poppins-semibold tracking-wider text-text-secondary uppercase">
            Buttons
          </Text>
          <View className="mb-5 gap-3">
            <View className="lingua-button lingua-button--primary">
              <Text className="lingua-button__text lingua-button__text--primary">
                Primary Button
              </Text>
            </View>
            <View className="lingua-button lingua-button--deep-purple">
              <Text className="lingua-button__text lingua-button__text--primary">
                Deep Purple Button
              </Text>
            </View>
            <View className="lingua-button lingua-button--secondary">
              <Text className="lingua-button__text lingua-button__text--secondary">
                Secondary Button
              </Text>
            </View>
          </View>

          {/* Badges */}
          <Text className="mb-3 text-caption font-poppins-semibold tracking-wider text-text-secondary uppercase">
            Badges
          </Text>
          <View className="flex-row flex-wrap gap-2">
            <View className="lingua-badge lingua-badge--streak">
              <Text className="font-poppins-medium text-xs text-streak">
                Streak 5 Days
              </Text>
            </View>
            <View className="lingua-badge lingua-badge--success">
              <Text className="font-poppins-medium text-xs text-success">
                Completed
              </Text>
            </View>
            <View className="lingua-badge lingua-badge--warning">
              <Text className="font-poppins-medium text-xs text-warning">
                Review Needed
              </Text>
            </View>
            <View className="lingua-badge lingua-badge--info">
              <Text className="font-poppins-medium text-xs text-info">
                New Lesson
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  mascotImage: {
    width: 64,
    height: 64,
  },
  navMascotImage: {
    width: 36,
    height: 36,
  },
  navMascotSmall: {
    width: 28,
    height: 28,
  },
});
