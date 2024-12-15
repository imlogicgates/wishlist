import { View, WishItemForm } from "@/components";
import { Wish } from "@/schemas";
import { Realm, useRealm } from "@realm/react";

export default function TabTwoScreen() {
  const realm = useRealm();

  const handleSubmit = (data: Partial<Wish>) => {
    realm.write(() => {
      realm.create("Wish", {
        ...data,
        _id: new Realm.BSON.ObjectId(),
        createdDate: new Date(),
      });
    });
  };

  return (
    <View className="flex-1 bg-white dark:bg-gray-900">
      <WishItemForm onSubmit={handleSubmit} />
    </View>
  );
}
