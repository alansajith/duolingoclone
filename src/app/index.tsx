import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";
import { useAuth } from "@clerk/expo";
import { images } from "@/constants/images";

export default function Index() {
  const { isSignedIn, isLoaded, signOut } = useAuth();

  if (!isLoaded) {
    return null;
  }

  if (!isSignedIn) {
    return <Redirect href="/onboarding" />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View className="flex-1 items-center justify-center">
        <View className="flex-row items-center justify-center gap-3">
          <Image
            source={images.mascotLogo}
            style={styles.mascotImage}
            resizeMode="contain"
          />
          <Text className="font-poppins-bold text-4xl tracking-tight text-text-primary">
            muolingo
          </Text>
        </View>
      </View>

      <View className="px-6 pb-6">
        <TouchableOpacity
          activeOpacity={0.88}
          onPress={() => signOut()}
          className="items-center justify-center rounded-2xl border border-border bg-white py-4"
        >
          <Text className="font-poppins-semibold text-base text-text-primary">
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  mascotImage: {
    width: 52,
    height: 52,
  },
});

