import { Icons } from "@/component/icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Otp = () => {
  const router = useRouter();

  const [otp, setOtp] = React.useState("");

  const handlePrevious = () => {
    router.back();
  };

  const handleNext = () => {
    if (otp.length === 4) router.push("/location");
  };

  return (
    <View className="flex-1 bg-white">
      <Image
        source={require("../assets/images/mask-group.png")}
        blurRadius={50}
        className="w-full"
      />

      <SafeAreaView
        className={`absolute px-5 w-full h-screen ${
          Platform.OS === "ios" ? "" : "mt-10"
        }`}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View className="flex-1">
            <TouchableOpacity onPress={handlePrevious} className="self-start">
              <Icons.LeftArrow />
            </TouchableOpacity>

            <View className="mt-16">
              <Text className="text-xl font-gilroySemiBold text-[#181725]">
                Enter your 4-digit code
              </Text>

              <View className="mt-4">
                <Text className="text-[#7C7C7C]">Code</Text>

                <TextInput
                  keyboardType="numeric"
                  maxLength={4}
                  onChangeText={(val) => {
                    const numeric = val.replace(/[^0-9]/g, "");
                    setOtp(numeric);
                  }}
                  value={otp}
                  placeholder="- - - -"
                  placeholderTextColor="#181725"
                  className="border-b-2 border-[#E2E2E2] rounded-xl px-4 py-4 mt-2"
                />
              </View>
            </View>
          </View>

          <View className="flex-1 left-0 right-0 bottom-10 px-5 flex-row justify-between items-end">
            <TouchableOpacity className="py-4 rounded-xl">
              <Text className="text-[#53B175] font-gilroyRegular">
                Resend Code
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              disabled={otp.length !== 4}
              className="p-5 rounded-full bg-[#53B175]"
            >
              <Icons.GreaterThan width={18} height={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Otp;
