import { Stack } from "expo-router";
import React from "react";

import { useClientOnlyValue } from "@/src/components/useClientOnlyValue";
import { gleamTitle } from "@/src/constants/gleamTitle";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Stack.Screen name="index" options={gleamTitle.withoutBackBtn} />
      <Stack.Screen
        name="hive"
        options={{
          title: "Hive",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="post"
        options={{
          title: "Post",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
