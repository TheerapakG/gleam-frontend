import { useIsFocused } from "@react-navigation/native";
import { FlashList, FlashListProps } from "@shopify/flash-list";
import defu from "defu";
import { LinearGradient } from "expo-linear-gradient";
import React, {
  ComponentPropsWithoutRef,
  RefAttributes,
  forwardRef,
  useState,
} from "react";
import { NativeScrollEvent } from "react-native";
import { View, useTheme } from "tamagui";

const _Forward = forwardRef<
  FlashList<any>,
  ComponentPropsWithoutRef<typeof FlashList<any>> & { isFocused?: boolean }
>((props, ref) => {
  const theme = useTheme();
  const isScreenFocused = useIsFocused();
  const [scrollEvent, setScrollEvent] = useState<NativeScrollEvent>();

  // TODO:
  const { isFocused, ...defaultedProps } = defu(props, {
    onScroll: ({ nativeEvent }) => {
      setScrollEvent(nativeEvent);
    },
  } satisfies Partial<FlashListProps<any>> & { isFocused?: boolean });

  return isFocused ?? isScreenFocused ? (
    <>
      <FlashList ref={ref} horizontal {...defaultedProps}></FlashList>
      {(scrollEvent?.contentOffset.y ?? 0) > 0 ? (
        <View position="absolute" w="$2" h="100%" left="$0">
          <LinearGradient
            colors={[theme.color1.val, "transparent"]}
            start={{ x: 0.0, y: 0.5 }}
            end={{ x: 1.0, y: 0.5 }}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      ) : null}
      {(scrollEvent?.contentOffset.y ?? 0) +
        (scrollEvent?.layoutMeasurement.height ?? 0) <
      (scrollEvent?.contentSize.height ?? 1) ? (
        <View position="absolute" w="$2" h="100%" right="$0">
          <LinearGradient
            colors={[theme.color1.val, "transparent"]}
            start={{ x: 1.0, y: 0.5 }}
            end={{ x: 0.0, y: 0.5 }}
            style={{ height: "100%", width: "100%" }}
          />
        </View>
      ) : null}
    </>
  ) : null;
});

export default <T,>(
  props: ComponentPropsWithoutRef<typeof FlashList<T>> &
    RefAttributes<FlashList<T>> & { isFocused?: boolean },
) => <_Forward {...props} />;
