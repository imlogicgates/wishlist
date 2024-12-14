import Realm from "realm";

const realm = new Realm({
  schema: [{ name: "Wishlist", properties: { name: "string" } }],
});
// Get on-disk location of the Realm
const realmFileLocation = realm.path;

console.log(realmFileLocation);
