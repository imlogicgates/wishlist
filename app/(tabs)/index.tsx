import { View } from "@/components/common";
import { WishlistList } from "@/components/wishlist";
import React from "react";

const TabOneScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <WishlistList />
    </View>
  );
};

export default TabOneScreen;
