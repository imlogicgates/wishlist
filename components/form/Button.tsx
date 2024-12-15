import { ButtonProps, Text, TouchableOpacity, View } from "react-native";

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-black text-white rounded-lg w-full"
      onPress={onPress}
      activeOpacity={0.7}
      accessible={true}
      accessibilityLabel={`Button: ${title}`}
    >
      <View className="w-full px-6 py-4 flex-row items-center justify-center">
        <Text className="text-white font-samsung-sharp text-xl">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
