import DefaultBtn from "@/component/Buttons/DefaultBtn";
import { CartItems } from "@/component/data/CartItem";
import { Icons } from "@/component/icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Animated,
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  const router = useRouter();
  const [visible, setVisible] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(0)).current;

  const handleClose = (id: number) => {};
  const handleIncrease = (id: number) => {
    console.log(id);
  };
  const handleDecrease = (id: number) => {};

  const handleCloseModal = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
    });
  };

  const handleCart = () => {
    setVisible(true);

    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleConfirm = () => {
    router.push("/Confirm");
  };

  return (
    <SafeAreaView className="p-5 flex-1 bg-white">
      <FlatList
        data={CartItems}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
        ListFooterComponent={
          CartItems.length > 0 ? (
            <TouchableOpacity
              className="bg-[#53B175] w-full items-center p-5 rounded-3xl  flex-row justify-between gap-5 mt-5"
              onPress={handleCart}
            >
              <View />

              <Text className="text-white font-gilroySemiBold text-lg">
                Go to Checkout
              </Text>

              <View>
                <Text className="text-white bg-[#489E67] p-1 font-gilroySemiBold">
                  $100.00
                </Text>
              </View>
            </TouchableOpacity>
          ) : null
        }
        renderItem={({ item }) => (
          <View className="flex-row gap-10 items-center w-full border-b-2 pb-5 border-[#E2E2E2] mb-5">
            <Image
              source={item.image}
              className="h-20 w-20"
              resizeMode="contain"
            />

            <View className="flex-row justify-between flex-1">
              <View className="flex-col gap-8">
                <View>
                  <Text className="font-gilroySemiBold text-xl">
                    {item.name}
                  </Text>
                  <Text className="text-[#7C7C7C] text-lg">
                    {item.measurement}, Price
                  </Text>
                </View>

                <View className="flex-row gap-5 items-center">
                  <TouchableOpacity
                    onPress={() => handleDecrease(item.id)}
                    className="border border-[#E2E2E2] px-4 py-5 rounded-2xl"
                  >
                    <Icons.Minus width={14} height={14} />
                  </TouchableOpacity>

                  <Text className="font-gilroySemiBold text-xl">
                    {item.quantity}
                  </Text>

                  <TouchableOpacity
                    onPress={() => handleIncrease(item.id)}
                    className="border border-[#E2E2E2] px-4 py-5 rounded-2xl"
                  >
                    <Icons.Plus color="#53B175" width={14} height={14} />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="justify-between items-center">
                <TouchableOpacity onPress={() => handleClose(item.id)}>
                  <Icons.Close width={20} height={20} />
                </TouchableOpacity>

                <Text className="text-2xl font-gilroySemiBold">
                  ${item.price}
                </Text>
              </View>
            </View>
          </View>
        )}
      />

      <Modal transparent visible={visible} animationType="fade">
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleCloseModal}
          className="flex-1 bg-black/40"
        >
          {/* Empty View to make overlay clickable */}
        </TouchableOpacity>

        {/* Bottom Sheet */}
        <Animated.View
        className=" absolute bottom-0 w-full h-3/6 bg-white px-5 gap-5"
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            transform: [
              {
                translateY: slideAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [400, 0], // slide up
                }),
              },
            ],
          }}
        >
          <View className="flex-row justify-between items-center mt-10">
            <Text className="font-gilroySemiBold text-2xl">
              Checkout Summary
            </Text>

            <TouchableOpacity onPress={handleCloseModal}>
              <Icons.Close width={20} height={20} />
            </TouchableOpacity>
          </View>
          <View className="gap-2">
            <View className="flex-row justify-between my-3">
              <Text className="text-[#7C7C7C] font-gilroySemiBold text-lg">
                Delivery
              </Text>

              <View className="flex-row items-center gap-2">
                <Text className="font-gilroySemiBold text-lg">
                  Select Method
                </Text>
                <Icons.GreaterThan width={12} height={12} />
              </View>
            </View>

            <View className="flex-row justify-between my-3">
              <Text className="text-[#7C7C7C] font-gilroySemiBold text-lg">
                Payment
              </Text>

              <View className="flex-row items-center gap-2">
                <Icons.Card width={20} height={20} />
                <Icons.GreaterThan width={12} height={12} />
              </View>
            </View>

            <View className="flex-row justify-between my-3">
              <Text className="text-[#7C7C7C] font-gilroySemiBold text-lg">
                Promo Code
              </Text>

              <View className="flex-row items-center gap-2">
                <Text className="font-gilroySemiBold text-lg">
                  Pick discount
                </Text>
                <Icons.GreaterThan width={12} height={12} />
              </View>
            </View>

            <View className="flex-row justify-between my-3">
              <Text className="text-[#7C7C7C] font-gilroySemiBold text-lg">
                Total Cost
              </Text>

              <View className="flex-row items-center gap-2">
                <Text className="font-gilroySemiBold text-lg">$100.00</Text>
                <Icons.GreaterThan width={12} height={12} />
              </View>
            </View>
          </View>

          <Text className="w-64 leading-6">
            By placing an order you agree to our Terms And Conditions
          </Text>

          <DefaultBtn
            label="Place Order"
            style="w-full mt-5"
            action={handleConfirm}
          />
        </Animated.View>
      </Modal>
    </SafeAreaView>
  );
};

export default Cart;
