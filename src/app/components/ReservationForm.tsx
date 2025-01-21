import { useState } from "react";
import { Button, Flex, Input, Box, Text } from "@chakra-ui/react";

export function ReservationForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/[^0-9]/g, "");
    let formattedInput = input;

    if (input.length > 3 && input.length <= 7) {
      formattedInput = `${input.slice(0, 3)}-${input.slice(3)}`;
    } else if (input.length > 7) {
      formattedInput = `${input.slice(0, 3)}-${input.slice(3, 7)}-${input.slice(
        7,
        11
      )}`;
    }

    setPhoneNumber(formattedInput);
  };

  const handleReservation = async () => {
    if (!phoneNumber.startsWith("010")) {
      window.alert("올바른 전화번호 형식이 아닙니다.");
      setPhoneNumber("");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        window.alert(
          "사전 예약이 완료되었습니다! 자세한 내용은 출시 후에 전달드리겠습니다!"
        );
        setPhoneNumber("");
      } else {
        window.alert("처리 중 문제가 발생했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      window.alert("처리 중 문제가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Flex
      direction={["row", "row"]} // 반응형 정렬
      justifyContent="center"
      alignItems="center"
      mb={12}
      gap={4} // 버튼과 입력창 간격
    >
      <Box
        flex="1" // 입력 창이 더 넓어지도록 설정
        maxW="400px" // 최대 너비 제한
      >
        <Input
          value={phoneNumber}
          onChange={handleInputChange}
          placeholder="010-1234-5678"
          borderRadius="lg"
          height="50px"
          width="100%"
          fontSize="large"
          border="none"
          bg="gray.200" /* 내부 배경 색상 */
          color="gray.600" /* 입력 텍스트 색상 */
          borderColor="gray.300"
          _hover={{ borderColor: "gray.400" }}
          _focus={{
            borderColor: "green.400",
            boxShadow: "0 0 0 1px green.400",
          }}
          _placeholder={{
            color: "gray.400" /* placeholder 색상 */,
          }}
        />
      </Box>
      <Box>
        <Button
          onClick={handleReservation}
          borderRadius="lg"
          height="50px"
          maxWidth="110px"
          bg="#0ECF82"
          color="white"
          fontSize="large"
          px={8}
          _hover={{ bg: "#0BA368" }}
          _active={{ bg: "#0BA368" }}
        >
          사전 예약
        </Button>
      </Box>
    </Flex>
  );
}
