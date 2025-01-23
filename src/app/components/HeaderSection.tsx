import { Box, Text, VStack, Container } from "@chakra-ui/react";

export function HeaderSection() {
  return (
    <Container centerContent maxWidth="100%" padding={0}>
      <VStack width="100%">
        <Box height={["59px", null, "80px"]} textAlign="left" width="100%">
          {/* 최상단 헤더 */}
          <Box height="35px" ml="16px" mt={["12px", null, "22px" ]}>
            {/* 왜 ㅊ 글자 피그마랑 모양이 다르지 */}
            <Text
              fontSize={["24px", null, "24px"]}
              color="#0dcf82"
              fontWeight="bold"
              fontFamily="Be Vietnam"
            >
              아이티치
            </Text>
          </Box>
        </Box>
        {/* 원래 mb 48px 인데 마지막줄 한글자 추가되어서 마진 24px 로 수정 */}
        <VStack textAlign="center" mb="24px">
          {/* 구분선 */}
          <Box
            width="100vw"
            height={["2px", null, "3px"]}
            bg="#0ECF82"
            mb={["13px", null, "40px"]}
            mt={"-8px"}
          />
          {/* 초록 텍스트박스 */}
          <Box
            bg="linear-gradient(90deg, #0ECF31, #0ECF82)"
            width={["295px", null, "486px"]}
            height={["80px", null, "60px"]}
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb="16px"
            mx="auto"
          >
            <Text
              fontSize={["16px", null, "20px"]}
              fontWeight="600"
              color="white"
              textAlign="center"
              lineHeight={["24px", null, "28px"]}
            >
              {/* 모바일 화면 */}
              <Box display={["block", null, "none"]}>
                [선착순 50명] <br /> 사전 예약하고 무료로 먼저 사용해보세요!
              </Box>
              {/* 데스크탑 화면 */}
              <Box display={["none", "none", "block"]}>
                [선착순 50명] 사전 예약하고 무료로 먼저 사용해보세요!
              </Box>
            </Text>
          </Box>

          {/* 굵은 글씨 소개 */}
          <Text
            fontSize={["28px", null, "40px"]}
            width={["250px", null, "547px"]}
            fontWeight="700"
            color="black"
            lineHeight={["36px", null, "52px"]}
            // mb="8px"
          >
            {/* 모바일 화면 */}
            <Box display={["block", "block", "none"]}>
              자기주도학습이 어려운
              <br />
              자녀를 위한 부담 없는
              <br />
              익명 온라인 스터디
            </Box>

            {/* 데스크탑 화면 */}
            <Box display={["none", "none", "block"]}>
              자기주도학습이 어려운 자녀를 위한
              <br />
              부담 없는 익명 온라인 스터디
            </Box>
          </Text>

          {/* 세부 설명 */}
          <Text
            fontSize={["16px", null, "16px"]}
            width={["295px", null, "660px"]}
            lineHeight="24px"
            color="#656565"
          >
            {/* 모바일 화면 */}
            <Box display={["block", "block", "none"]}>
              AI가 같은 꿈을 가진 친구들로 그룹을 구성하고, 자녀가 직접 친구들을
              가르치며 스스로 학습할 수 있습니다. 수업 주제는 자녀가 정하며,
              성공적으로 마칠 경우 보상으로 용돈을 받을 수 있습니다.
            </Box>
            {/* 데스크탑 화면 */}
            <Box display={["none", "block", "block"]}>
              AI가 같은 꿈을 가진 친구들로 그룹을 구성하고, 자녀가 직접 친구들을
              가르치며 스스로 학습할 수 있습니다.
              <br />
              수업 주제는 자녀가 정하며, 성공적으로 마칠 경우 보상으로 용돈을
              받을 수 있습니다.
            </Box>
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
}
