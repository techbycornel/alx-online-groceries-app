import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Expo Icons

interface PasswordInputProps {
  value: string;
  onChangeText: (text: string) => void;
}


const PasswordInput = ({ value, onChangeText } : PasswordInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View className="relative">
      <TextInput
        className="border-b border-[#E2E2E2] rounded-xl p-4 mt-2 pr-12"
        placeholder="Enter your password"
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />

      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        className="absolute right-0 top-5 mr-5"
      >
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color="#7C7C7C"
        />
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;
