import { Box, Text, VStack } from "@chakra-ui/react";

export function HeaderSection() {
  return (
    <VStack p={0}>
      <VStack textAlign="center" mb={8} align="stretch">
      <Box mt="-20px">
        <Text
          fontSize={["2xl", "xl", "xl"]}
          color="#0dcf82"
          textAlign="left"
          alignSelf="flex-start"
          fontWeight="bold"
          mx={"5"}
        >
          아이티치
        </Text>
      </Box>
        <Box
          width="100vw"
          height="1px"
          bg="gray.300"
          mb={4} // 구분선 아래 여백 추가
        />
        <Box
          bg="linear-gradient(90deg, #34d058, #0ECF82)" // 그라데이션 색상
          color="white"
          width="100%"
          maxWidth={["300px", "450px", "450px"]}
          py={[4, 3, 3]} // 위아래 패딩 추가 (크기 증가)
          px={[4, 4, 6]} // 양쪽 패딩 감소 (크기 조정)
          borderRadius="xl"
          textAlign="center"
          fontWeight="400"
          fontSize={["md", "large", "large"]}
          mb={6} // 여백 조금 더 추가
          mx="auto" // 중앙 정렬
        >
          <Text
            fontSize={["md", "lg", "large"]}
            fontWeight="medium"
            color="white"
            textAlign="center"
          >
            {/* 모바일 줄바꿈 */}
            <Box display={["block", "none", "none"]}>
              [선착순 50명] <br /> 사전 예약하고 무료로 먼저 사용해보세요!
            </Box>
            {/* 데스크탑 한 줄 */}
            <Box display={["none", "block", "block"]}>
              [선착순 50명] 사전 예약하고 무료로 먼저 사용해보세요!
            </Box>
          </Text>
        </Box>

        <Text
          fontSize={["3xl", "4xl"]}
          fontWeight="700"
          color="black"
          mb={4}
          px={3}
        >
          {/* 모바일에서 보여지는 텍스트 */}
          <Box display={["block", "none", "none"]}>
            자기주도학습이 어려운
            <br />
            자녀를 위한 부담 없는
            <br />
            익명 온라인 스터디
          </Box>

          {/* 데스크탑에서 보여지는 텍스트 */}
          <Box display={["none", "block", "block"]}>
            자기주도학습이 어려운 자녀를 위한
            <br />
            부담 없는 익명 온라인 스터디
          </Box>
        </Text>
        <Text fontSize={["sm", "md"]} color="gray.600">
          {/* 모바일 */}
          <Box display={["block", "none", "none"]} fontSize={"md"} px={9}>
            AI가 같은 꿈을 가진 친구들로 그룹을 구성하고, 자녀가 직접 친구들을
            가르치며 스스로 학습할 수 있습니다. 수업 주제는 자녀가 정하며,
            성공적으로 마칠 경우 보상으로 용돈을 받을 수 있습니다.
          </Box>
          {/* 데스크탑 */}
          <Box display={["none", "block", "block"]}>
            AI가 같은 꿈을 가진 친구들로 그룹을 구성하고, 자녀가 직접 친구들을
            가르치며 스스로 학습할 수 있습니다.
            <br />
            수업 주제는 자녀가 정하며, 성공적으로 마칠 경우 보상으로 용돈을 받을
            수 있습니다.
          </Box>
        </Text>
      </VStack>
    </VStack>
  );
}
