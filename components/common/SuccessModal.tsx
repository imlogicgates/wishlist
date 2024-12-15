import LottieView from "lottie-react-native";
import { useRef } from "react";
import { Modal, Text, View } from "react-native";
import { Button } from "../form";

type Props = {
  visible: boolean;
  onClose: () => void;
  message: string;
};

export const SuccessModal = ({ visible, onClose, message }: Props) => {
  const animation = useRef<LottieView>(null);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-center items-center">
        <View className="flex-1 w-[100vw] bg-white p-6 rounded-lg items-center">
          <View className="flex-1 flex-col m-auto h-[80vh] w-full items-center justify-center">
            <LottieView
              autoPlay
              loop
              ref={animation}
              style={{
                width: 200,
                height: 200,
              }}
              source={require("@/assets/lottie/check.json")}
            />
            <Text className="text-2xl font-bold font-samsung-sharp">
              {message}
            </Text>
          </View>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
