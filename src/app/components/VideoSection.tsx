import { Box } from "@chakra-ui/react";

export function VideoSection() {
  return (
    <Box
    textAlign="center"
    bg="white"
    shadow="md"
    borderRadius="xl"
    overflow="hidden"
    maxWidth="900px" // 최대 크기 제한
    mx="auto" // 중앙 정렬
    >
      <video controls width="100%">
        <source src="/244754_tiny.mp4" type="video/mp4" />
        동영상이 지원되지 않습니다.
      </video>
    </Box>
  );
}
