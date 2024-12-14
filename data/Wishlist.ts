import { Realm, createRealmContext } from "@realm/react";
import { ObjectSchema } from "realm";

class Wishlist extends Realm.Object<Wishlist> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  description?: string;
  createdDate?: Date;

  static schema: ObjectSchema = {
    name: "Wishlist",
    properties: {
      _id: "objectId",
      name: "string",
      description: "string?",
      createdDate: "date?",
    },
  };
}

export const WishlistRealmContext = createRealmContext({
  schema: [Wishlist],
});
