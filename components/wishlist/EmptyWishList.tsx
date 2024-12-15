import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Text, View } from "react-native";
export const EmptyWishList = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View className="flex-1 flex-col m-auto h-[80vh] w-full items-center justify-center">
      <LottieView
        autoPlay
        loop
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("@/assets/lottie/empty-list.json")}
      />
      <Text className="text-lg font-bold">No wishlist items</Text>
    </View>
  );
};
