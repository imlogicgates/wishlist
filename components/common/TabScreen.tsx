import { Text, View } from "@/components/Themed";
import React from "react";

interface TabScreenProps {
  title: string;
  children: React.ReactNode;
}

const TabScreen: React.FC<TabScreenProps> = ({ title, children }) => {
  return (
    <View
      className="flex-1 items-center justify-center"
      accessibilityLabel="Tab Screen"
    >
      <Text
        className="text-2xl font-bold font-samsung-sharp"
        accessibilityLabel="Title"
      >
        {title}
      </Text>
      <View
        className="h-1 w-80 bg-gray-500"
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
        accessibilityLabel="Divider"
      />
      {children}
    </View>
  );
};

export default TabScreen;
