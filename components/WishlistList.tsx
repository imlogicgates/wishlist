import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "./Themed";

interface WishlistItem {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

const fetchWishlistItems = async (): Promise<WishlistItem[]> => {
  // Replace this with your actual data fetching logic (e.g., API call)
  return [
    {
      id: "1",
      title: "New Laptop",
      description: "A high-performance laptop for programming and gaming.",
      imageUrl: "https://example.com/laptop.jpg",
    },
    {
      id: "2",
      title: "Headphones",
      description: "Noise-cancelling over-ear headphones.",
      imageUrl: "https://example.com/headphones.jpg",
    },
    // Add more items as needed
  ];
};

const WishlistList: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const loadWishlist = async () => {
    try {
      const items = await fetchWishlistItems();
      setWishlist(items);
    } catch (error) {
      console.error("Failed to load wishlist items:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadWishlist();
  };

  const renderItem = ({ item }: { item: WishlistItem }) => (
    <TouchableOpacity
      className="flex-row items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow mb-2"
      onPress={() => {
        // Handle item press (e.g., navigate to details)
        console.log(`Pressed item with id: ${item.id}`);
      }}
      accessible={true}
      accessibilityLabel={`Wishlist item: ${item.title}`}
    >
      {item.imageUrl && (
        <View className="w-16 h-16 mr-4">
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: "100%", height: "100%", borderRadius: 8 }}
            resizeMode="cover"
            accessible={false}
          />
        </View>
      )}
      <View className="flex-1">
        <Text className="text-lg font-semibold text-black dark:text-white">
          {item.title}
        </Text>
        {item.description && (
          <Text className="text-sm text-gray-600 dark:text-gray-300">
            {item.description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#2f95dc" />
        <Text className="mt-2 text-gray-500">Loading your wishlist...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={wishlist}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      className="p-4"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListEmptyComponent={
        <View className="flex-1 items-center justify-center">
          <Text className="text-center text-gray-500">
            Your wishlist is empty. Start adding some items!
          </Text>
        </View>
      }
      accessibilityRole="list"
    />
  );
};

export default WishlistList;
