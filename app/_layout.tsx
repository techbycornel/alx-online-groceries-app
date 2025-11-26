import { Icons } from "@/component/icons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
import "../styles/global.css";
import { Provider } from "react-redux";
import { store } from "../store"; // make sure path is correct


SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Gilroy-Regular": require("../assets/fonts/gilroy/gilroy-regular.ttf"),
    "Gilroy-SemiBold": require("../assets/fonts/gilroy/gilroy-semibold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />

          <Stack.Screen name="home" />

          <Stack.Screen name="login-options" />

          <Stack.Screen name="otp" />

          <Stack.Screen name="location" />

          <Stack.Screen name="login" />

          <Stack.Screen name="signup" />

          <Stack.Screen name="Confirm" />

          <Stack.Screen
            name="[id]"
            options={{
              headerShown: true,
              headerTitle: () => (
                <View className="flex-row items-center gap-2 justify-between">
                  <View />

                  <View>
                    <TouchableOpacity>
                      <Icons.Download width={20} height={20} />
                    </TouchableOpacity>
                  </View>
                </View>
              ),
            }}
          />
        </Stack>
      </QueryClientProvider>
    </Provider>
  );
}
