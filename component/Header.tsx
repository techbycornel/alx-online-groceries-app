import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

const Header = ({ title, rightIcon, leftIcon }: Props) => {
  const router = useRouter();

  const action = () => {
    router.back();
  };
  
  return (
    <View className="flex-row justify-between items-center py-6 w-full px-4">
      <View>
        <TouchableOpacity onPress={action}>{leftIcon}</TouchableOpacity>
      </View>

      <Text className="font-gilroySemiBold text-2xl">{title}</Text>

      <View>{rightIcon}</View>
    </View>
  );
};

export default Header;
