import { AccountOptions } from "@/component/data/Account";
import { Icons } from "@/component/icons";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Account = () => {
  return (
    <SafeAreaView className="flex-1 p-7 bg-white gap-10">
      <View className="flex-row items-center gap-5">
        <Image
          source={require("../../assets/images/personal-pics.png")}
          className="w-16 h-16 rounded-full"
          resizeMode="contain"
        />

        <View className="">
          <View className="flex-row items-center gap-2">
            <Text className="font-gilroySemiBold text-2xl">
              Oaikhienan Cornelius
            </Text>
            <Icons.Edit width={15} height={15} />
          </View>

          <Text className="text-lg text-[#7C7C7C] font-gilroyRegular">
            corneliusedos@gmail.com
          </Text>
        </View>
      </View>

      <ScrollView className="flex-col">
        <View className="">
          {AccountOptions.map((item) => (
            <TouchableOpacity
              key={item.id}
              className="flex-row justify-between border-b border-[#E2E2E2] py-5"
            >
              <View className="flex-row gap-5">
                <item.Icon width={18} height={18} color="black" />
                <Text className="font-gilroySemiBold text-xl">
                  {item.title}
                </Text>
              </View>

              <Icons.GreaterThan width={14} height={14} color="black" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View className="mt-10 w-full items-center bottom-0">
        <TouchableOpacity className="bg-[#F2F3F2] w-full items-center p-5 rounded-3xl flex-row justify-between">
          <Icons.Logout />
          <Text className="text-[#53B175] font-gilroySemiBold text-lg">
            Log Out
          </Text>
          <View />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Account;
