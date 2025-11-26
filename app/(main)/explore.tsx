import Category from "@/component/Card/Category";
import { Categories } from "@/component/data/Categories";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (id: number) => {
    console.log("Selected category:", id);
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-5 gap-5">
      {/* Search Bar */}
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

      {/* Categories */}
      <View className="flex-row flex-wrap justify-between w-full gap-10">
        {Categories.map((item) => (
          <Category
            key={item.id}
            id={item.id}
            label={item.name}
            image={item.image}
            style={
              item.id === 1
                ? "border border-[#53B175] bg-[#53b17531]"
                : item.id === 2
                  ? "border border-[#F8A44C] bg-[#f8a54c3f]"
                  : item.id === 3
                    ? "border border-[#F7A593] bg-[#f7a5935d]"
                    : item.id === 4
                      ? "border border-[#D3B0E0] bg-[#d3b0e049]"
                      : item.id === 5
                        ? "border border-[#FDE598] bg-[#fde5984b]"
                        : item.id === 6
                          ? "border border-[#B7DFF5] bg-[#b7dff544]"
                          : ""
            }
            action={handleSearch}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Explore;
