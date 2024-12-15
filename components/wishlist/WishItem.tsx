import { Text, View } from "@/components";
import { Wish } from "@/schemas";
import { useRealm } from "@realm/react";
import { Image } from "expo-image";
import { TouchableOpacity } from "react-native";

export const WishItem = ({ item }: { item: Wish }) => {
  const realm = useRealm();

  const handleDeleteWishList = (wish: Wish) => {
    realm.write(() => {
      realm.delete(wish);
    });
  };

  return (
    <TouchableOpacity
      onPress={() => handleDeleteWishList(item)}
      accessible={true}
      accessibilityLabel={`WishList item: ${item.name}`}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center p-4 bg-white dark:bg-gray-800 rounded-lg drop-shadow-2xl mb-2">
        <View className="w-16 h-16 mr-4">
          <Image
            source={require("@/assets/images/icon.png")}
            placeholder={require("@/assets/images/icon.png")}
            style={{ width: "100%", height: "100%", borderRadius: 8 }}
            contentFit="cover"
            transition={200}
          />
        </View>
        <View className="flex-1">
          <Text
            type="header"
            className="text-md text-md text-black dark:text-white"
          >
            {item.name}
          </Text>
          <Text className="text-sm font-light text-gray-600 dark:text-gray-300">
            {item.description ?? ""}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
