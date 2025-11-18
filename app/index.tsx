import { Icons } from "@/component/icons";
import { useRouter } from "expo-router";
import { MotiText, MotiView } from "moti";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = () => {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/home"); // Navigate to homepage
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#4caf50]">
      <View className="flex-1 flex-row items-center justify-center gap-3">
        <MotiView
          from={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 800, delay: 200 }}
        >
          <Icons.Logo width={70} height={70} />
        </MotiView>

        <View className="items-center">
          <MotiText
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 500, duration: 800 }}
            className="text-7xl text-white"
            style={{
              letterSpacing: 5,
            }}
          >
            nectar
          </MotiText>

          <MotiText
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 700, duration: 800 }}
            className="font-gilroyRegular text-xl text-white"
            style={{
              letterSpacing: 4.3,
              lineHeight: 18,
            }}
          >
            online groceriet
          </MotiText>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
