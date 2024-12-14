import { View } from "@/components/common";
import { WishList } from "@/components/wishlist";
import { Wish } from "@/schemas";
import { Realm, useRealm } from "@realm/react";
import React from "react";
import { Button } from "react-native";

const TabOneScreen: React.FC = () => {
  const realm = useRealm();

  const handleAddWishList = () => {
    realm.write(() => {
      realm.create(Wish, {
        _id: new Realm.BSON.ObjectId(),
        name: "New Wish",
        description: "A new wish",
      });
    });
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <Button title="Add Wish" onPress={handleAddWishList} />
      <WishList />
    </View>
  );
};

export default TabOneScreen;
