import { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";

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
    if (!phoneNumber) return;

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
    <Flex direction={["column", "row"]} justifyContent="center" alignItems="center" mb={12}>
      <Input
        value={phoneNumber}
        onChange={handleInputChange}
        placeholder="010-1234-5678"
        borderRadius="xl"
        width={["90%", "40%"]}
        size="2xl"
        mb={["4", "0"]}
        borderColor="gray.300"
        _hover={{ borderColor: "gray.400" }}
        _focus={{ borderColor: "green.400", boxShadow: "0 0 0 1px green.400" }}
      />
      <Button
        onClick={handleReservation}
        borderRadius="xl"
        size="2xl"
        width={["90%", "auto"]}
        bg="#39b01e"
        color="white"
        _hover={{ bg: "#09760d" }}
        ml={["0", "4"]}
      >
        {isSubmitting ? "예약 중..." : "사전 예약하기"}
      </Button>
    </Flex>
  );
}
