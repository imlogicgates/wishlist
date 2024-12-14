import { Text, View } from "@/components/common";
import { Wishlist } from "@/schemas";
import { useQuery, useRealm } from "@realm/react";
import { Image } from "expo-image";
import React from "react";
import { FlatList, RefreshControl } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const WishlistList: React.FC = () => {
  const wishlists = useQuery(Wishlist);
  const realm = useRealm();

  const renderItem = ({ item }: { item: Wishlist }) => (
    <TouchableOpacity
      onPress={() => {}}
      accessible={true}
      accessibilityLabel={`Wishlist item: ${item.name}`}
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

  return (
    <FlatList
      data={wishlists}
      keyExtractor={(item) => item._id.toString()}
      renderItem={renderItem}
      className="p-4"
      refreshControl={
        <RefreshControl refreshing={realm.isClosed} onRefresh={() => {}} />
      }
      ListEmptyComponent={
        <View className="flex-1 items-center justify-center">
          <Text className="text-center text-gray-500">
            Your wishlist is empty. Start adding some items!
          </Text>
        </View>
      }
      onEndReached={() => {}}
      onEndReachedThreshold={0.5}
      accessibilityRole="list"
    />
  );
};

export default WishlistList;
