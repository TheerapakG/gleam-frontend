import React from "react";
import { Sheet, View, Text, YStack } from "tamagui";

import DullBtn from "@/src/components/DullBtn";
import QueryPlaceholder from "@/src/components/QueryPlaceholder";
import StorybookPortal from "@/src/components/StorybookPortal";
import VerticalList from "@/src/components/VerticalList";
import { TextStyle } from "@/src/constants/TextStyle";
import { useTagByCategoryQuery } from "@/src/hooks/hive";
import { Tag } from "@/src/schemas/tag";

const TagList = ({
  categoryId,
  isFocused,
  setTag,
}: {
  categoryId: number;
  isFocused: boolean;
  setTag?: (tag: Tag) => void;
}) => {
  const tagByCategoryQuery = useTagByCategoryQuery(categoryId);

  return (
    <QueryPlaceholder
      query={tagByCategoryQuery}
      spinnerSize="large"
      renderData={(data) => (
        <VerticalList
          data={data}
          numColumns={3}
          ItemSeparatorComponent={() => <View h="$1" />}
          estimatedItemSize={46}
          renderItem={({ item }) => (
            <View f={1} mx="$3">
              <DullBtn
                size="$2"
                w="100%"
                onPress={() => {
                  setTag?.(item);
                }}
              >
                <Text col="$color12" {...TextStyle.button.extraSmall}>
                  {item.tag_name}
                </Text>
              </DullBtn>
            </View>
          )}
          isFocused={isFocused}
        />
      )}
    />
  );
};

export default function ({
  open,
  setOpen,
  setTag,
}: {
  open: boolean;
  setOpen?: (open: boolean) => void;
  setTag?: (tag: Tag) => void;
}) {
  const tagCategories = [
    "Sports and Fitness",
    "Learning and Development",
    "Health and Wellness",
    "Entertainment and Media",
    "Hobbies and Leisure",
    "Others",
  ];

  return (
    <StorybookPortal>
      <Sheet snapPoints={[80]} open={open} onOpenChange={setOpen}>
        <Sheet.Overlay />
        <Sheet.Frame p="$4" jc="center" ai="center" bc="$color1" gap="$3">
          <YStack f={1} w="100%">
            {tagCategories.map((title, index) => (
              <YStack
                f={1}
                w="100%"
                jc="center"
                ai="center"
                gap="$3"
                key={index}
              >
                <Text {...TextStyle.button.large}>{title}</Text>
                <YStack f={1} w="100%" jc="center" ai="center">
                  <View w="100%" h="100%">
                    <TagList
                      categoryId={index}
                      isFocused={open}
                      setTag={(tag) => {
                        setTag?.(tag);
                        setOpen?.(false);
                      }}
                    />
                  </View>
                </YStack>
              </YStack>
            ))}
          </YStack>
        </Sheet.Frame>
      </Sheet>
    </StorybookPortal>
  );
}
