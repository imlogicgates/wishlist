import { View } from "@/components/common";
import { WishList } from "@/components/wishlist";
import React from "react";

const TabOneScreen: React.FC = () => {
  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <WishList />
    </View>
  );
};

export default TabOneScreen;
