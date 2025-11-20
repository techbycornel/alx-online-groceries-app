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

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNext = () => {
    router.push("/(main)");
  };

  const handleSignup = () => {
    router.push("/signup");
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
            <Text className="font-gilroySemiBold text-2xl">Login</Text>

            <Text className="font-gilroyRegular text-[#7C7C7C]">
              Enter your email and password
            </Text>
          </View>

          <View className="gap-5">
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
              <Text>
                <Text className="font-gilroySemiBold text-[#7C7C7C]">
                  Password
                </Text>
              </Text>
              <PasswordInput value={password} onChangeText={setPassword} />
            </View>

            <TouchableOpacity className="self-end">
              <Text className="self-end ">Forgot Password?</Text>
            </TouchableOpacity>

            <DefaultBtn
              label="Log In"
              action={handleNext}
              style="w-full mt-5"
            />

            <View className="flex-row items-center justify-center mt-2">
              <Text className="font-gilroySemiBold">
                Don’t have an account?{" "}
              </Text>

              <TouchableOpacity onPress={handleSignup}>
                <Text className="text-[#53B175] font-gilroySemiBold">
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Login;
