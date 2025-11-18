import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();

  const handleSplash = () => {
    router.push("/splash");
  };


  return (
    <SafeAreaView className="flex-1 text-center flex justify-center items-center gap-3">
      <Text className="border-2 border-red-700">this is the home screen</Text>

      <TouchableOpacity
        className="bg-blue-700 p-3 rounded-xl"
        onPress={handleSplash}
      >
        <Text className="text-white">Move to splash screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
