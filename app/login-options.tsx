import { Icons } from "@/component/icons";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginOptions = () => {
  const router = useRouter();

  const [phone, setPhone] = React.useState("");
  const [selectedCountry, setSelectedCountry] = React.useState({
    code: "+1",
    flag: "https://flagcdn.com/w320/us.png",
  });
  const [open, setOpen] = React.useState(false);

  const fetchCountries = async () => {
    const res = await fetch(
      "https://restcountries.com/v3.1/all?fields=idd,flags"
    );
    return res.json();
  };

  const { data } = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });

  const countryCodes =
    data
      ?.map((c) => {
        const root = c?.idd?.root;
        const suffix = c?.idd?.suffixes?.[0] || "";
        if (!root) return null;
        return {
          code: root + suffix,
          flag: c?.flags?.png,
        };
      })
      .filter(Boolean) || [];

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
    >
      <View className="flex-1 bg-white flex-col">
        <View>
          <Image source={require("../assets/images/mask-group.png")} />
        </View>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View className="px-10 flex-col justify-end">
            <Text className="font-gilroySemiBold text-[#030303] text-3xl">
              Get your groceries with nectar
            </Text>

            {/* PHONE INPUT */}
            <View className="flex-row items-center gap-3 mt-5 border-b border-[#E2E2E2] pb-2">
              <View>
                <TouchableOpacity
                  className="flex-row items-center gap-2"
                  onPress={() => setOpen(true)}
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    minWidth: 100,
                  }}
                >
                  <Image
                    source={{ uri: selectedCountry.flag }}
                    style={{ width: 24, height: 16 }}
                  />
                  <Text>{selectedCountry.code}</Text>
                </TouchableOpacity>

                {/* COUNTRY PICKER MODAL */}
                <Modal visible={open} transparent animationType="fade">
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => setOpen(false)}
                  />

                  <View
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: 10,
                      position: "absolute",
                      top: "25%",
                      left: "10%",
                      right: "10%",
                      maxHeight: 300,
                      paddingVertical: 10,
                    }}
                  >
                    <FlatList
                      data={countryCodes}
                      keyExtractor={(item, index) => `${item.code}-${index}`}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          onPress={() => {
                            setSelectedCountry(item);
                            setOpen(false);
                          }}
                          style={{
                            padding: 15,
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          <Image
                            source={{ uri: item.flag }}
                            style={{ width: 24, height: 16 }}
                          />
                          <Text>{item.code}</Text>
                        </TouchableOpacity>
                      )}
                      showsVerticalScrollIndicator
                    />
                  </View>
                </Modal>
              </View>

              <TextInput
                keyboardType="numeric"
                onChangeText={(val) => {
                  const numeric = val.replace(/[^0-9]/g, "");
                  setPhone(numeric);
                }}
                value={phone}
                placeholder="Phone number"
                style={{
                  padding: 15,
                  flex: 1,
                }}
              />
            </View>

            <View className="flex justify-end items-end">
              {phone.length > 0 && (
                <TouchableOpacity
                  onPress={() => router.push("/otp")} // <- SET YOUR NEXT SCREEN
                  className="bg-[#53B175] p-5 items-center mt-8 rounded-full"
                >
                  <Icons.GreaterThan width="18" height="18" color="white" />
                </TouchableOpacity>
              )}
            </View>

            <View className="gap-10 mt-10">
              <Text className="text-center text-[#828282] font-gilroySemiBold text-base">
                Or connect with social media
              </Text>

              <View className="gap-5">
                <TouchableOpacity className="bg-[#5383EC] p-5 rounded-3xl items-center flex-row justify-center gap-5">
                  <Icons.Google width={23} height={23} />
                  <Text className="text-white font-gilroySemiBold text-lg">
                    Continue with Google
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity className="bg-[#4A66AC] p-5 rounded-3xl items-center flex-row justify-center gap-5">
                  <Icons.Facebook width={23} height={23} />
                  <Text className="text-white font-gilroySemiBold text-lg">
                    Continue with Facebook
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScrollView>
  );
};

export default LoginOptions;
