import { ButtonProps, Text, TouchableOpacity, View } from "react-native";

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      className="bg-black text-white rounded-lg"
      onPress={onPress}
      activeOpacity={0.7}
      accessible={true}
      accessibilityLabel={`Button: ${title}`}
    >
      <View className="flex-row items-center justify-center">
        <Text className="text-white font-samsung-sharp text-xl px-6 py-4">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
