import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

import Colors from "@/constants/Colors";
import { useClientOnlyValue } from "@/hooks";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
        headerTitleStyle: {
          fontFamily: "SamsungSharp",
        },
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          position: "absolute",
          top: (60 - 15) / 2,
          fontFamily: "SamsungSharp",
        },
        tabBarIconStyle: {
          display: "none",
        },
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Wish List",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Create Wish",
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
