import { Box } from "@chakra-ui/react";

export function VideoSection() {
  return (
    <Box textAlign="center" bg="white" shadow="md" borderRadius="xl" overflow="hidden">
      <video controls width="100%">
        <source src="/244754_tiny.mp4" type="video/mp4" />
        동영상이 지원되지 않습니다.
      </video>
    </Box>
  );
}
