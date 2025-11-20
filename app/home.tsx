import { Icons } from "@/component/icons";
import DefaultBtn from "@/component/Buttons/DefaultBtn";
import { useRouter } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();


  const handleLoginOptions = () => {
    router.push("/login-options");
  }

  const handleLogin = () => {
    router.push("/login");
  }


  return (
    <ImageBackground
      className="flex-1"
      resizeMode="cover"
      source={require("../assets/images/intro.png")}
    >
      <SafeAreaView className="flex-1">
        <View className="flex justify-end items-center gap-11 flex-1 bottom-24 px-10">
          <View className="">
            <Icons.Logo />
          </View>

          <View className="gap-4">
            <View className=" items-center gap-3">
              <Text className="text-5xl text-white font-gilroySemiBold">
                Welcome
              </Text>
              <Text className="text-5xl text-white font-gilroySemiBold">
                {" "}
                to our store
              </Text>
            </View>

            <Text className="text-white font-gilroyRegular text-lg">
              Ger your groceries in as fast as one hour
            </Text>
          </View>

          <View className="w-full gap-4">
            <DefaultBtn label="Get Started" style="w-full" action={handleLoginOptions} />

            <TouchableOpacity className="self-center" onPress={handleLogin}>
              <Text className="text-center text-white font-gilroyRegular text-lg">
                Login to continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
