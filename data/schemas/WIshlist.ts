import Realm, { BSON } from "realm";

export class Wishlist extends Realm.Object {
  _id!: BSON.UUID;
  name!: string;
  description?: string;
  isComplete?: boolean;
  createdAt?: Date;

  static primaryKey = "_id";
  static schema = {
    name: "Wishlist",
    primaryKey: "_id",
    properties: {
      _id: "uuid",
      description: "string",
      createdAt: {
        type: "date",
        default: () => new Date(),
      },
      isComplete: {
        type: "bool",
        default: false,
        indexed: true,
      },
    },
  };

  constructor(realm: Realm, description: string) {
    super(realm, {
      _id: new BSON.UUID(),
      description,
      createdAt: new Date(),
    });
  }
}
