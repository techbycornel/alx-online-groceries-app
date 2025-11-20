import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Props {
  label: string;
  style: string;
  action: () => void;
}


const DefaultBtn = ({ label, style, action } : Props) => {
  return (
    <View className={`${style}`}>
      <TouchableOpacity className="p-5 rounded-3xl bg-[#4caf50] items-center" onPress={action}>
        <Text className="text-white text-xl font-gilroySemiBold">{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DefaultBtn;
