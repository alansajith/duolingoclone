import React, { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";

interface VerificationModalProps {
  visible: boolean;
  email?: string;
  onClose: () => void;
  onSuccess?: () => void;
}

interface ModalContentProps {
  email?: string;
  onClose: () => void;
  onSuccess?: () => void;
}

function VerificationModalContent({
  email,
  onClose,
  onSuccess,
}: ModalContentProps) {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (resendTimer <= 0) {
      return;
    }
    const interval = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleCodeChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, "").slice(0, 6);
    setCode(cleaned);

    if (cleaned.length === 6) {
      Keyboard.dismiss();
      setTimeout(() => {
        onClose();
        if (onSuccess) {
          onSuccess();
        } else {
          router.replace("/");
        }
      }, 250);
    }
  };

  const handleResend = () => {
    if (!canResend) return;
    setCanResend(false);
    setResendTimer(30);
    setCode("");
    inputRef.current?.focus();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.keyboardAvoid}
    >
      {/* Semi-transparent backdrop */}
      <Pressable style={styles.backdrop} onPress={onClose} />

      {/* Modal Container */}
      <View className="w-full rounded-t-[32px] border-t border-border bg-white px-6 pt-5 pb-9 shadow-2xl">
        {/* Top handle and close button */}
        <View className="mb-4 flex-row items-center justify-between">
          <View className="h-1.5 w-10 rounded-full bg-slate-200" />
          <TouchableOpacity
            onPress={onClose}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            activeOpacity={0.7}
            className="h-8 w-8 items-center justify-center rounded-full bg-surface"
          >
            <Text className="font-poppins-semibold text-xs text-text-secondary">
              ✕
            </Text>
          </TouchableOpacity>
        </View>

        {/* Heading */}
        <Text className="text-center font-poppins-bold text-2xl text-text-primary">
          Verify your email
        </Text>

        {/* Subtitle / Email note */}
        <Text className="mt-2 text-center font-poppins text-sm leading-5 text-text-secondary">
          We&#39;ve sent a 6-digit verification code to{"\n"}
          <Text className="font-poppins-semibold text-text-primary">
            {email?.trim() || "alex@gmail.com"}
          </Text>
        </Text>

        {/* Hidden number-pad input */}
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={handleCodeChange}
          keyboardType="number-pad"
          maxLength={6}
          textContentType="oneTimeCode"
          autoFocus={true}
          style={styles.hiddenInput}
        />

        {/* 6 Digit Cells Container */}
        <Pressable
          onPress={() => inputRef.current?.focus()}
          className="my-7 flex-row justify-center gap-2.5"
        >
          {Array.from({ length: 6 }).map((_, index) => {
            const digit = code[index] || "";
            const isFocused =
              index === code.length || (index === 5 && code.length === 6);

            return (
              <View
                key={index}
                className={`h-14 w-12 items-center justify-center rounded-2xl border-2 ${
                  digit
                    ? "border-lingua-purple bg-lingua-purple/5"
                    : isFocused
                      ? "border-lingua-purple bg-white"
                      : "border-border bg-surface"
                }`}
              >
                <Text className="font-poppins-bold text-2xl text-text-primary">
                  {digit}
                </Text>
                {isFocused && !digit && (
                  <View className="absolute bottom-3 h-0.5 w-4 rounded-full bg-lingua-purple" />
                )}
              </View>
            );
          })}
        </Pressable>

        {/* Helper / Resend code */}
        <View className="flex-row items-center justify-center">
          <Text className="font-poppins text-xs text-text-secondary">
            Didn&#39;t receive the code?{" "}
          </Text>
          {canResend ? (
            <TouchableOpacity onPress={handleResend} activeOpacity={0.7}>
              <Text className="font-poppins-semibold text-xs text-lingua-purple">
                Resend code
              </Text>
            </TouchableOpacity>
          ) : (
            <Text className="font-poppins-medium text-xs text-text-secondary">
              Resend in {resendTimer}s
            </Text>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export function VerificationModal({
  visible,
  email,
  onClose,
  onSuccess,
}: VerificationModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      {visible ? (
        <VerificationModalContent
          email={email}
          onClose={onClose}
          onSuccess={onSuccess}
        />
      ) : null}
    </Modal>
  );
}

const styles = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(13, 19, 43, 0.45)",
  },
  hiddenInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0.01,
  },
});

export default VerificationModal;
