import DefaultBtn from "@/component/Buttons/DefaultBtn";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Confirm = () => {
  const router = useRouter();
  const handleHome = () => {
    router.push("/(main)");
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-between items-center px-5 py-10">
        <View className="items-center gap-5 flex-1 justify-center">
          <Image source={require("@/assets/images/confirm.png")} />

          <Text className="font-gilroySemiBold text-4xl text-center leading-8">
            Your Order has been accepted
          </Text>

          <Text className="text-[#7C7C7C] text-lg text-center leading-7 w-96">
            Your items has been placed and is on its way to being processed
          </Text>
        </View>

        <View className="w-full gap-3 mb-5">
          <DefaultBtn label="Track Order" style="w-full" action={() => {}} />

          <TouchableOpacity
            className="text-center items-center self-center"
            onPress={handleHome}
          >
            <Text className="text-lg font-gilroySemiBold">Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Confirm;
