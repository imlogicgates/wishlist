import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "./Themed";

interface WishlistItem {
  id: string;
  title: string;
  description?: string;
  imageUrl?: string;
}

const fetchWishlistItems = async (
  page: number,
  limit: number
): Promise<WishlistItem[]> => {
  // Replace this with your actual data fetching logic (e.g., API call)
  // Here we simulate pagination with static data
  const allItems = [
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
    // ...
  ];

  const start = (page - 1) * limit;
  const end = start + limit;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allItems.slice(start, end));
    }, 1000); // Simulate network delay
  });
};

const WishlistList: React.FC = () => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadWishlist = async (pageNumber: number = 1) => {
    try {
      const items = await fetchWishlistItems(pageNumber, 10);
      if (pageNumber === 1) {
        setWishlist(items);
      } else {
        setWishlist((prev) => [...prev, ...items]);
      }
      if (items.length < 10) {
        setHasMore(false);
      }
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
    setHasMore(true);
    setPage(1);
    loadWishlist(1);
  };

  const loadMore = () => {
    if (!hasMore || loading) return;
    const nextPage = page + 1;
    setPage(nextPage);
    loadWishlist(nextPage);
  };

  const renderItem = ({ item }: { item: WishlistItem }) => (
    <TouchableOpacity
      onPress={() => {
        console.log(`Pressed item with id: ${item.id}`);
      }}
      accessible={true}
      accessibilityLabel={`Wishlist item: ${item.title}`}
      activeOpacity={0.7}
    >
      <View className="flex-row items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow mb-2">
        {item.imageUrl && (
          <View className="w-16 h-16 mr-4">
            <Image
              source={item.imageUrl}
              placeholder={require("../assets/images/icon.png")}
              style={{ width: "100%", height: "100%", borderRadius: 8 }}
              contentFit="cover"
              transition={200}
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
      </View>
    </TouchableOpacity>
  );

  if (loading && page === 1) {
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
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        loading && page > 1 ? (
          <ActivityIndicator size="small" color="#2f95dc" />
        ) : null
      }
      accessibilityRole="list"
    />
  );
};

export default WishlistList;
