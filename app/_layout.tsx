import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "../styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


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
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />

        <Stack.Screen name="home" />

        <Stack.Screen name="login-options" />

        <Stack.Screen name="otp" />

        <Stack.Screen name="location" />

        <Stack.Screen name="login" />

        <Stack.Screen name="signup" />
      </Stack>
    </QueryClientProvider>
  );
}
