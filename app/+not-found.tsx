import { Link, Stack } from "expo-router";

import { Text, View } from "@/components/Themed";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl font-bold font-samsung-sharp">
          This screen doesn't exist.
        </Text>

        <Link href="/" className="mt-15">
          <Text className="text-lg text-blue-500">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
