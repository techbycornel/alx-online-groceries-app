import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface CategoryProps {
  id: number;
  label: string;
  image: any;
  style: string;
  action: (id: number) => void;
}

const Category = ({ id, label, image, style, action }: CategoryProps) => {
  return (
    <View className="">
      <TouchableOpacity
        className={`${style} p-5 gap-5 flex-col items-center rounded-2xl justify-center h-56`}
        onPress={() => action(id)}
      >
        <Image source={image} className="w-40 h-20" resizeMode="contain"/>

        <Text className="font-gilroySemiBold text-2xl text-[#181725] w-40 text-center">
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;
