import { Realm } from "@realm/react";
import { ObjectSchema } from "realm";

export class Wish extends Realm.Object<Wish> {
  _id!: Realm.BSON.ObjectId;
  name!: string;
  description?: string;
  createdDate?: Date;

  static schema: ObjectSchema = {
    name: "Wish",
    properties: {
      _id: "objectId",
      name: "string",
      description: "string?",
      createdDate: "date?",
    },
  };
}
