import { Stack } from "expo-router";
import React from "react";

import BackBtn from "@/src/components/BackBtn";
import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import { GleamTitle, titleStyle } from "@/src/constants/Title";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Stack.Screen name="index" options={GleamTitle.withoutBackBtn} />
      <Stack.Screen
        name="create"
        options={{
          title: "HIVE CREATION",
          headerTitleAlign: "center",
          headerTitleStyle: titleStyle,
          headerLeft: () => <BackBtn />,
        }}
      />
    </Stack>
  );
}
