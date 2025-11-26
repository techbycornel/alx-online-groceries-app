// SideWaysCard.tsx
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icons } from "../icons";

interface Props {
  image: any;
  name: string;
  measurement: string;
  price: string;
  action: () => void;
}

const SideWaysCard = ({ image, name, measurement, price, action }: Props) => {
  return (
    <View className="gap-5 border border-[#7C7C7C] rounded-xl w-52 mr-5 justify-center p-5">
      <TouchableOpacity className="gap-5" onPress={action}>
        <View className="items-center">
          <Image source={image} className="h-20 w-20" resizeMode="contain"/>
        </View>

        <View>
          <Text className="font-gilroySemiBold text-xl">{name}</Text>
          <Text className="text-[#7C7C7C] text-lg font-gilroyRegular">
            {measurement}, Price
          </Text>
        </View>
      </TouchableOpacity>

      <View className="flex-row justify-between items-end">
        <Text className="font-gilroySemiBold text-xl">${price}</Text>

        <TouchableOpacity className="bg-[#53B175] p-3 rounded-2xl">
          <Icons.Plus width={14} height={14} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SideWaysCard;
