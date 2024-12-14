import { WishItemForm } from "@/components";
import { Wish } from "@/schemas";
import { Realm, useRealm } from "@realm/react";
import { router } from "expo-router";
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
    router.back();
  };

  return <WishItemForm onSubmit={handleSubmit} />;
}
