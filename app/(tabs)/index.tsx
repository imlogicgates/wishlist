import { View } from "@/components/common";
import { WishlistList } from "@/components/wishlist";
import { Wishlist } from "@/schemas";
import { Realm, useQuery, useRealm } from "@realm/react";
import React from "react";
import { Button } from "react-native";

const TabOneScreen: React.FC = () => {
  const wishlists = useQuery(Wishlist);
  const realm = useRealm();

  const handleAddWishlist = () => {
    realm.write(() => {
      realm.create("Wishlist", {
        _id: new Realm.BSON.ObjectId(),
        name: "New Wishlist",
        description: "A new wishlist",
      });
    });
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <Button title="Add Wishlist" onPress={handleAddWishlist} />
      <WishlistList />
    </View>
  );
};

export default TabOneScreen;
