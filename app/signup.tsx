import DefaultBtn from "@/component/Buttons/DefaultBtn";
import { Icons } from "@/component/icons";
import PasswordInput from "@/component/PasswordInput";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const router = useRouter();

  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNext = () => {
    router.push("/(main)");
  };

  const handleLogin = () => {
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
        <View className="flex-col gap-10">
          <View className="items-center">
            <Icons.MainLogo />
          </View>

          <View className="gap-2">
            <Text className="font-gilroySemiBold text-2xl">Sign Up</Text>

            <Text className="font-gilroyRegular text-[#7C7C7C]">
              Enter your email and password
            </Text>
          </View>

          <View className="gap-10">
            <View>
              <Text className="font-gilroySemiBold text-[#7C7C7C]">
                Username
              </Text>
              <TextInput
                className="border-b border-[#E2E2E2] rounded-xl p-4 mt-2"
                placeholder="Enter your username"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View>
              <Text className="font-gilroySemiBold text-[#7C7C7C]">Email</Text>
              <TextInput
                className="border-b border-[#E2E2E2] rounded-xl p-4 mt-2"
                placeholder="Enter your email"
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View>
              <Text className="font-gilroySemiBold text-[#7C7C7C]">
                Password
              </Text>
              <PasswordInput value={password} onChangeText={setPassword} />
            </View>

            <Text className="self-end ">
              By continuing you agree to our Terms of Service and Privacy
              Policy.
            </Text>

            <View className="gap-5">
              <DefaultBtn
                label="Sign Up"
                action={handleNext}
                style="w-full mt-5"
              />

              <View className="flex-row items-center justify-center mt-2">
                <Text className="font-gilroySemiBold">
                  Already have an account?{" "}
                </Text>

                <TouchableOpacity onPress={handleLogin}>
                  <Text className="text-[#53B175] font-gilroySemiBold">
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Signup;
