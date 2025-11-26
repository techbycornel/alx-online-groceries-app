import SideWaysCard from "@/component/Card/SideWaysCard";
import { Products } from "@/component/data/product";
import { Icons } from "@/component/icons";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const router = useRouter();

  const handleDetail = (id: number) => {
    console.log(id);
    router.push({
      pathname: `/[id]`,
      params: { id: String(id) },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-5 gap-5">
      <View className="items-center justify-center gap-3">
        <Icons.MainLogo width={30} height={30} />
        <View className="flex flex-row items-center gap-3">
          <Icons.Location width={20} height={20} />
          <Text className="text-[#4C4F4D] font-gilroySemiBold text-lg">
            Lagos, Nigeria.
          </Text>
        </View>
      </View>

      <View className="flex-row items-center bg-[#F2F3F2] rounded-2xl px-3">
        <Ionicons name="search" size={18} color="#181B1" />
        <TextInput
          className="ml-2 flex-1 font-gilroySemiBold text-lg"
          placeholder="Search store"
          value={searchText}
          onChangeText={setSearchText}
          returnKeyType="search"
          style={{ fontSize: 16 }}
        />
      </View>

      <ScrollView className="">
        <View className="gap-5">
          <Image source={require("@/assets/images/products/banner.png")} />

          <View>
            <View className="flex-row items-center justify-between">
              <Text className="font-gilroySemiBold text-2xl">
                Exclusive Offer
              </Text>

              <TouchableOpacity>
                <Text className="text-[#53B175] font-gilroySemiBold text-xl">
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-5"
            >
              {[...Products] // clone array to avoid mutating original
                .sort((a, b) => Number(b.price) - Number(a.price))
                .map((item) => (
                  <SideWaysCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    measurement={item.measurement}
                    price={item.price}
                    action={() => handleDetail(item?.id)}
                  />
                ))}
            </ScrollView>
          </View>

          <View>
            <View className="flex-row items-center justify-between">
              <Text className="font-gilroySemiBold text-2xl">Best Selling</Text>

              <TouchableOpacity>
                <Text className="text-[#53B175] font-gilroySemiBold text-xl">
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-5"
            >
              {[...Products] // clone array to avoid mutating original
                .sort((a, b) => b.rate - a.rate) // sort highest first
                .map((item) => (
                  <SideWaysCard
                    key={item.id}
                    image={item.image}
                    name={item.name}
                    measurement={item.measurement}
                    price={item.price}
                    action={() => handleDetail(item?.id)}
                  />
                ))}
            </ScrollView>
          </View>

          <View>
            <View className="flex-row items-center justify-between">
              <Text className="font-gilroySemiBold text-2xl">Groceries</Text>

              <TouchableOpacity>
                <Text className="text-[#53B175] font-gilroySemiBold text-xl">
                  See all
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              className="mt-5"
            >
              {Products.map((item) => (
                <SideWaysCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  measurement={item.measurement}
                  price={item.price}
                  action={() => handleDetail}
                />
              ))}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
