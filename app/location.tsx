import DefaultBtn from "@/component/Buttons/DefaultBtn";
import { Icons } from "@/component/icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Location = () => {
  const router = useRouter();

  const [otp, setOtp] = React.useState("");

  const handlePrevious = () => {
    router.back();
  };

  const handleNext = () => {
    router.push("/login");
  };

  return (
    <View className="flex-1 bg-white ">
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
        <View>
          <TouchableOpacity onPress={handlePrevious} className="self-start">
            <Icons.LeftArrow />
          </TouchableOpacity>

          <View className="mt-16 items-center flex-col gap-10">
            <Icons.Map />

            <View className="gap-2">
              <Text className="text-center font-gilroySemiBold text-2xl">Select Your Location</Text>

              <Text className="text-center font-gilroyRegular text-[#7C7C7C] leading-6">
                Swithch on your location to stay in tune with what’s happening
                in your area
              </Text>
            </View>

            <DefaultBtn
              label="Submit"
              action={handleNext}
              style="w-full mt-10"
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Location;