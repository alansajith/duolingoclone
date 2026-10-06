import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";

interface SpeechBubbleProps {
  text: string;
  bgColor: string;
  textColor: string;
  tailDirection: "bottom-left" | "bottom-right";
  style?: object;
}

function SpeechBubble({
  text,
  bgColor,
  textColor,
  tailDirection,
  style,
}: SpeechBubbleProps) {
  return (
    <View style={[styles.bubbleWrapper, style]}>
      <View style={[styles.bubbleCard, { backgroundColor: bgColor }]}>
        <Text style={[styles.bubbleText, { color: textColor }]}>{text}</Text>
      </View>
      <View
        style={[
          styles.bubbleTail,
          tailDirection === "bottom-left"
            ? [styles.tailLeft, { borderTopColor: bgColor }]
            : [styles.tailRight, { borderTopColor: bgColor }],
        ]}
      />
    </View>
  );
}

export default function OnboardingScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/sign-up");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Top Header / App Brand */}
        <View className="flex-row items-center justify-center gap-2 pt-2">
          <Image
            source={images.mascotLogo}
            style={styles.topLogo}
            resizeMode="contain"
          />
          <Text className="font-poppins text-[20px] tracking-tight text-text-primary">
            muolingo
          </Text>
        </View>

        {/* Headlines */}
        <View className="mt-8 px-7">
          <Text className="font-poppins-bold text-[32px] leading-[40px] tracking-tight text-text-primary">
            Your AI language{"\n"}
            <Text className="text-lingua-purple">teacher.</Text>
          </Text>
          <Text className="mt-3.5 font-poppins text-base leading-[24px] text-text-secondary">
            Real conversations, personalized{"\n"}lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Center Illustration with Mascot & Floating Speech Bubbles */}
        <View className="my-auto w-full items-center justify-center px-4 py-6">
          <View style={styles.illustrationContainer}>
            {/* Mascot Image */}
            <Image
              source={images.mascotWelcome}
              style={styles.mascotImage}
              resizeMode="contain"
            />

            {/* Speech Bubble 1: Hello! */}
            <SpeechBubble
              text="Hello!"
              bgColor="#EFF6FD"
              textColor="#0D132B"
              tailDirection="bottom-right"
              style={styles.bubbleHello}
            />

            {/* Speech Bubble 2: ¡Hola! */}
            <SpeechBubble
              text="¡Hola!"
              bgColor="#F4F2FF"
              textColor="#6C4EF5"
              tailDirection="bottom-left"
              style={styles.bubbleHola}
            />

            {/* Speech Bubble 3: 你好! */}
            <SpeechBubble
              text="你好!"
              bgColor="#FCF3EE"
              textColor="#FF4D4F"
              tailDirection="bottom-left"
              style={styles.bubbleNihao}
            />
          </View>
        </View>

        {/* Bottom Action Button (Pagination dots omitted per instruction) */}
        <View className="px-6 pb-4">
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={handleGetStarted}
            className="relative flex-row items-center justify-center rounded-2xl bg-lingua-purple py-[18px]"
          >
            <Text className="font-poppins-semibold text-lg text-white">
              Get Started
            </Text>
            <View style={styles.chevronContainer}>
              <View style={styles.chevron} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
  },
  topLogo: {
    width: 44,
    height: 44,
  },
  illustrationContainer: {
    width: 320,
    height: 320,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  mascotImage: {
    width: 270,
    height: 270,
    marginTop: 20,
  },
  bubbleWrapper: {
    position: "absolute",
    alignItems: "center",
  },
  bubbleCard: {
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  bubbleText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    lineHeight: 22,
  },
  bubbleTail: {
    position: "absolute",
    bottom: -6,
    width: 0,
    height: 0,
    borderTopWidth: 7,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
  tailLeft: {
    left: 16,
    borderLeftWidth: 2,
    borderRightWidth: 9,
  },
  tailRight: {
    right: 16,
    borderLeftWidth: 9,
    borderRightWidth: 2,
  },
  bubbleHello: {
    top: 36,
    left: 14,
  },
  bubbleHola: {
    top: 8,
    right: 24,
  },
  bubbleNihao: {
    top: 114,
    right: 8,
  },
  chevronContainer: {
    position: "absolute",
    right: 24,
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  chevron: {
    width: 10,
    height: 10,
    borderTopWidth: 2.5,
    borderRightWidth: 2.5,
    borderColor: "#FFFFFF",
    transform: [{ rotate: "45deg" }],
    marginLeft: -3,
  },
});
