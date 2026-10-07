import React, { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useSignIn, useSSO } from "@clerk/expo";
import { images } from "@/constants/images";
import { VerificationModal } from "@/components/VerificationModal";

export default function SignInScreen() {
  const router = useRouter();
  const { signIn } = useSignIn();
  const { startSSOFlow } = useSSO();

  const [email, setEmail] = useState("");
  const [isVerificationVisible, setIsVerificationVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push("/onboarding");
    }
  };

  const handleSignIn = async () => {
    if (!email.trim()) {
      Alert.alert("Missing Email", "Please enter your email address.");
      return;
    }

    try {
      setIsLoading(true);
      const { error } = await signIn.emailCode.sendCode({
        emailAddress: email.trim(),
      });

      if (error) {
        Alert.alert(
          "Sign In Error",
          error.longMessage ||
            error.message ||
            "Failed to send verification code."
        );
        return;
      }

      setIsVerificationVisible(true);
    } catch (err: any) {
      Alert.alert(
        "Sign In Error",
        err?.longMessage || err?.message || "An unexpected error occurred."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (code: string) => {
    try {
      const { error } = await signIn.emailCode.verifyCode({ code });
      if (error) {
        return {
          success: false,
          error:
            error.longMessage ||
            error.message ||
            "Invalid verification code.",
        };
      }

      if (signIn.status === "complete") {
        const { error: finalizeError } = await signIn.finalize();
        if (finalizeError) {
          return {
            success: false,
            error:
              finalizeError.longMessage ||
              finalizeError.message ||
              "Failed to finalize session.",
          };
        }
      }

      return { success: true };
    } catch (err: any) {
      return {
        success: false,
        error: err?.longMessage || err?.message || "Verification failed.",
      };
    }
  };

  const handleResendCode = async () => {
    try {
      const { error } = await signIn.emailCode.sendCode({
        emailAddress: email.trim(),
      });
      if (error) {
        return {
          success: false,
          error:
            error.longMessage ||
            error.message ||
            "Failed to resend code.",
        };
      }
      return { success: true };
    } catch (err: any) {
      return {
        success: false,
        error: err?.longMessage || err?.message || "Failed to resend code.",
      };
    }
  };

  const handleSocialAuth = async (
    strategy: "oauth_google" | "oauth_facebook" | "oauth_apple"
  ) => {
    try {
      const { createdSessionId, setActive } = await startSSOFlow({
        strategy,
      });
      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/");
      }
    } catch (err: any) {
      const message = err?.errors?.[0]?.message || err?.message;
      if (message && !message.toLowerCase().includes("cancel")) {
        Alert.alert("Sign In", message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
      >
        {/* Top Header / Back Button */}
        <View className="pt-2">
          <TouchableOpacity
            onPress={handleBack}
            hitSlop={{ top: 14, bottom: 14, left: 14, right: 14 }}
            activeOpacity={0.7}
            style={styles.backButton}
          >
            <View style={styles.backChevron} />
          </TouchableOpacity>
        </View>

        {/* Headlines */}
        <View className="mt-5">
          <Text className="font-poppins-bold text-[28px] leading-[36px] tracking-tight text-text-primary">
            Welcome back
          </Text>
          <Text className="mt-1.5 font-poppins text-base text-text-secondary">
            Continue your language journey today ✨
          </Text>
        </View>

        {/* Mascot Illustration with Sparkles */}
        <View style={styles.mascotSection}>
          {/* Top-left Orange Sparkle */}
          <View style={styles.sparkleOrange}>
            <Image
              source={images.sparkle}
              style={[styles.sparkleIcon, { tintColor: "#FF8A00" }]}
              resizeMode="contain"
            />
          </View>

          {/* Top-right Sky Blue Sparkle */}
          <View style={styles.sparkleBlue}>
            <Image
              source={images.sparkle}
              style={[styles.sparkleIconSmall, { tintColor: "#4D8BFF" }]}
              resizeMode="contain"
            />
          </View>

          {/* Mid-right Yellow Sparkle */}
          <View style={styles.sparkleYellow}>
            <Image
              source={images.sparkle}
              style={[styles.sparkleIcon, { tintColor: "#FFC800" }]}
              resizeMode="contain"
            />
          </View>

          {/* Waving Fox Mascot */}
          <Image
            source={images.mascotAuth}
            style={styles.mascotImage}
            resizeMode="contain"
          />
        </View>

        {/* Input: Email (Passwordless sign-in) */}
        <View className="rounded-2xl border border-border bg-white px-5 py-3">
          <Text className="font-poppins-medium text-[13px] text-text-secondary">
            Email
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="alex@gmail.com"
            placeholderTextColor="#94A3B8"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            className="mt-1 font-poppins-medium text-base text-text-primary"
            style={styles.textInput}
          />
        </View>

        {/* CTA Button: Sign In */}
        <TouchableOpacity
          activeOpacity={0.88}
          onPress={handleSignIn}
          disabled={isLoading}
          className="mt-5 items-center justify-center rounded-2xl bg-lingua-purple py-4"
        >
          <Text className="font-poppins-semibold text-base text-white">
            {isLoading ? "Signing In..." : "Sign In"}
          </Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="my-6 flex-row items-center">
          <View className="h-[1px] flex-1 bg-border" />
          <Text className="px-3 font-poppins text-xs text-text-secondary">
            or continue with
          </Text>
          <View className="h-[1px] flex-1 bg-border" />
        </View>

        {/* Social Auth Providers */}
        <View className="gap-3">
          {/* Google */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => handleSocialAuth("oauth_google")}
            className="flex-row items-center justify-center gap-3.5 rounded-2xl border border-border bg-white py-3.5"
          >
            <Image
              source={images.googleIcon}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text className="font-poppins-medium text-[15px] text-text-primary">
              Continue with Google
            </Text>
          </TouchableOpacity>

          {/* Facebook */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => handleSocialAuth("oauth_facebook")}
            className="flex-row items-center justify-center gap-3.5 rounded-2xl border border-border bg-white py-3.5"
          >
            <Image
              source={images.facebookIcon}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text className="font-poppins-medium text-[15px] text-text-primary">
              Continue with Facebook
            </Text>
          </TouchableOpacity>

          {/* Apple */}
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => handleSocialAuth("oauth_apple")}
            className="flex-row items-center justify-center gap-3.5 rounded-2xl border border-border bg-white py-3.5"
          >
            <Image
              source={images.appleIcon}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text className="font-poppins-medium text-[15px] text-text-primary">
              Continue with Apple
            </Text>
          </TouchableOpacity>
        </View>

        {/* Footer / Switch to Sign Up */}
        <View className="mt-8 mb-6 flex-row items-center justify-center">
          <Text className="font-poppins text-sm text-text-secondary">
            Don&#39;t have an account?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => router.push("/sign-up")}
            activeOpacity={0.7}
          >
            <Text className="font-poppins-semibold text-sm text-lingua-purple">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Verification Modal */}
      <VerificationModal
        visible={isVerificationVisible}
        email={email}
        onClose={() => setIsVerificationVisible(false)}
        onVerify={handleVerifyCode}
        onResend={handleResendCode}
        onSuccess={() => router.replace("/")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    backgroundColor: "#FFFFFF",
    paddingBottom: 20,
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -8,
  },
  backChevron: {
    width: 12,
    height: 12,
    borderLeftWidth: 2.5,
    borderBottomWidth: 2.5,
    borderColor: "#0D132B",
    transform: [{ rotate: "45deg" }],
    marginLeft: 4,
  },
  mascotSection: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
    marginBottom: -4,
    height: 140,
    position: "relative",
  },
  mascotImage: {
    width: 175,
    height: 140,
  },
  sparkleOrange: {
    position: "absolute",
    top: 22,
    left: 28,
  },
  sparkleBlue: {
    position: "absolute",
    top: 24,
    right: 32,
  },
  sparkleYellow: {
    position: "absolute",
    top: 66,
    right: 20,
  },
  sparkleIcon: {
    width: 16,
    height: 16,
  },
  sparkleIconSmall: {
    width: 13,
    height: 13,
  },
  textInput: {
    paddingVertical: 0,
    includeFontPadding: false,
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
});
