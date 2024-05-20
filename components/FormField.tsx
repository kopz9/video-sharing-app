import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

type Props = {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  keyboardType?: string;
};

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
}: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#9CA3AF"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !passwordVisible}
        />

        {title === "Password" && (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Image
              source={!passwordVisible ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              rezizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
