import DefaultBtn from "@/component/Buttons/DefaultBtn";
import { Products } from "@/component/data/product";
import { Icons } from "@/component/icons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Details = () => {
  const params = useLocalSearchParams();
  const id = params.id;
  const product = Products.find((item) => item.id === Number(id));
  console.log(product);
  


  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 50 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full items-center border-b border-gray-300 pt-5 pb-10 bg-white rounded-b-3xl">
        <Image
          source={product?.image}
          className="w-60 h-60"
          resizeMode="contain"
        />
      </View>

      <View className="px-7">
        <View className="gap-5 border-b border-gray-300 py-5">
          <View className="flex-row justify-between mt-5">
            <View className="flex-col">
              <Text className="font-gilroySemiBold text-2xl">
                {product?.name}
              </Text>
              <Text className="text-[#4C4F4D] font-gilroySemiBold text-lg mt-2">
                {product?.category}
              </Text>
            </View>
            <TouchableOpacity>
              <Icons.Favorite width={24} height={24} />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between mt-5 items-center">
            <View className="flex-row gap-5 items-center">
              <TouchableOpacity
                // onPress={() => handleDecrease(item.id)}
                className="border border-[#E2E2E2] px-4 py-5 rounded-2xl"
              >
                <Icons.Minus width={14} height={14} />
              </TouchableOpacity>

              <Text className="font-gilroySemiBold text-xl">
                {/* {item.quantity} */}
              </Text>

              <TouchableOpacity
                // onPress={() => handleIncrease(item.id)}
                className="border border-[#E2E2E2] px-4 py-5 rounded-2xl"
              >
                <Icons.Plus color="#53B175" width={14} height={14} />
              </TouchableOpacity>
            </View>

            <Text className="font-gilroySemiBold text-xl">$100.00</Text>
          </View>
        </View>

        <View className=" my-5 gap-2 border-b border-gray-300 pb-5">
          <Text className="font-gilroySemiBold text-2xl ">Product Details</Text>
          <Text className="text-[#7C7C7C] text-lg leading-7">
            Apples are nutritious fruits that offer a range of health benefits.
            They are a good source of dietary fiber, vitamin C, and various
            antioxidants. Regular consumption of apples has been linked to
            improved heart health, weight management, and a lower risk of
            certain chronic diseases.
          </Text>
        </View>

        <View className="flex-row justify-between border-b border-gray-300">
          <Text className="font-gilroySemiBold text-2xl mb-5">Nutrition</Text>

          <View className="flex-row gap-4">
            <Text className="font-gilroyRegular bg-[#7C7C7C] self-start text-lg px-2 rounded-lg">
              {product?.measurement}
            </Text>

            <View className="mt-1">
              <Icons.GreaterThan width={14} height={14} />
            </View>
          </View>
        </View>

        <View className="flex-row justify-between border-b border-gray-300 py-5">
          <Text className="font-gilroySemiBold text-2xl">Reviews</Text>

          <Image
            source={require("../assets/icons/star.png")}
            className="mt-2"
          />
        </View>

        <DefaultBtn label="Add To Basket" style="w-full" action={() => {}} />
      </View>
    </ScrollView>
  );
};

export default Details;
