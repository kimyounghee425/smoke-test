import { Box, Text, VStack } from "@chakra-ui/react";

export function HeaderSection() {
  return (
    <VStack textAlign="center" mb={8}>
      <Box
        bg="#39b01e"
        color="white"
        py={2}
        px={4}
        borderRadius="xl"
        textAlign="center"
        fontWeight="bold"
        fontSize={["md", "lg", "xl"]}
        width={["90%", "80%", "60%"]}
        mb={5}
      >
        <Text
          fontSize={["md", "lg", "xl"]}
          fontWeight="bold"
          color="white"
          textAlign="center"
        >
          {/* 모바일 줄바꿈 */}
          <Box display={["block", "none", "none"]}>
            [선착순 50명] 사전 예약하고 <br /> 무료로 먼저 사용해보세요!
          </Box>
          {/* 데스크탑 한 줄 */}
          <Box display={["none", "block", "block"]}>
            [선착순 50명] 사전 예약하고 무료로 먼저 사용해보세요!
          </Box>
        </Text>
      </Box>
      <Text
        fontSize={["xl", "3xl"]}
        fontWeight="900"
        color="black"
        mb={4}
        px={3}
      >
        {/* 모바일에서 보여지는 텍스트 */}
        <Box display={["block", "none", "none"]}>
          자기주도학습이 안되는 초등학생 자녀를 위한
          같은 꿈을 가진 친구들과의 부담 없는 익명 온라인 스터디
        </Box>

        {/* 데스크탑에서 보여지는 텍스트 */}
        <Box display={["none", "block", "block"]}>
          자기주도학습이 안되는 초등학생 자녀를 위한
          <br />
          같은 꿈을 가진 친구들과의 부담 없는 익명 온라인 스터디
        </Box>
      </Text>
      <Text fontSize={["sm", "md"]}  color="gray.600">
        우리는 AI를 활용해 자녀의 객관적인 학습 수준을 진단하고, 그에 맞는
        맞춤형 솔루션을 제공합니다.
        <br />
        또한, 자기주도 학습이 어려운 자녀에게 동기를 부여해 스스로 학습할 수
        있도록 돕습니다.
      </Text>
    </VStack>
  );
}
