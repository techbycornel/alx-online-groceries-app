import DefaultBtn from "@/component/Buttons/DefaultBtn";
import { Icons } from "@/component/icons";
import { RootState } from "@/store";
import { addToCart } from "@/store/slices/cartSlice";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const Favourite = () => {
  // 🔥 fetch favorites from redux
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorite.items);

  const handleAction = () => {
    if (!favorites || favorites.length === 0) return;

    favorites.forEach((item) => {
      dispatch(
        addToCart({
          id: item.id,
          name: item.name,
          price: String(item.price),
          quantity: 1,
          measurement: item.measurement,
          image: item.image,
        })
      );
    });
  };

  return (
    <SafeAreaView className="p-5 flex-1">
      <FlatList
        data={favorites}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 10 }}
        /* 👇 Footer scrolls with the FlatList */
        ListFooterComponent={
          favorites.length > 0 ? (
            <View className="mt-8">
              <DefaultBtn
                label="Add All To Cart"
                style=""
                action={handleAction}
              />
            </View>
          ) : null
        }
        renderItem={({ item }) => (
          <View className="flex-row gap-10 border-b-2 pb-5 border-[#E2E2E2] w-full mb-4">
            <Image
              source={item.image}
              className="h-20 w-20"
              resizeMode="contain"
            />

            <View className="flex-row justify-between items-center flex-1">
              <View className="gap-1">
                <Text className="font-gilroySemiBold text-xl">{item.name}</Text>

                <Text className="text-[#7C7C7C] text-lg">
                  {item.measurement}, Price
                </Text>
              </View>

              <View className="flex-row items-center gap-3 p-2">
                <Text className="text-xl mt-1 font-gilroySemiBold">
                  ${item.price}
                </Text>

                <TouchableOpacity>
                  <Icons.GreaterThan width={14} height={14} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Favourite;
