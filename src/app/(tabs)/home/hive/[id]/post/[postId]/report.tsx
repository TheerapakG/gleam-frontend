import { Input, Text } from "tamagui";

import DangerBtn from "@/src/components/DangerBtn";
import PageContainer from "@/src/components/PageContainer";
import { TextStyle } from "@/src/constants/TextStyle";

export default function ReportScreen() {
  return (
    <PageContainer>
      <Text w="100%" {...TextStyle.button.large}>
        What do you want to report?
      </Text>
      <Input w="100%" placeholder="Enter your issue" />
      <Text w="100%" {...TextStyle.button.large}>
        Give us some details
      </Text>
      <Input h="$12" w="100%" placeholder="Describe the issue" multiline />
      <DangerBtn> Report </DangerBtn>
    </PageContainer>
  );
}
