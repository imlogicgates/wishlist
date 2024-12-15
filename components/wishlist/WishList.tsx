import { Wish } from "@/schemas";
import { useQuery, useRealm } from "@realm/react";
import React from "react";
import { FlatList, RefreshControl } from "react-native";
import { EmptyWishList } from "./EmptyWishList";
import { WishItem } from "./WishItem";

export const WishList: React.FC = () => {
  const wishlist = useQuery(Wish);
  const realm = useRealm();

  return (
    <FlatList
      data={wishlist}
      keyExtractor={(item) => item._id.toString()}
      renderItem={({ item }) => <WishItem item={item} />}
      className="p-4"
      refreshControl={
        <RefreshControl refreshing={realm.isClosed} onRefresh={() => {}} />
      }
      ListEmptyComponent={<EmptyWishList />}
      onEndReached={() => {}}
      onEndReachedThreshold={0.5}
      accessibilityRole="list"
    />
  );
};

export default WishList;
