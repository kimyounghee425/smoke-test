"use client";
import "./global.css";
import { Box, Container } from "@chakra-ui/react";
import { HeaderSection } from "./components/HeaderSection";
import { ReservationForm } from "./components/ReservationForm";
import { VideoSection } from "./components/VideoSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const userVisited = "visited";

    if (!localStorage.getItem(userVisited)) {
      // 아이티치 = 2번
      fetch("/api/count-visitor/?key=2", { method: "GET" })
        .then((response) => {
          if (response.ok) {
            console.log("성공적으로 카운트됨");
            localStorage.setItem(userVisited, "true");
          } else {
            console.error("카운트 안됨");
          }
        })
        .catch((error) => console.error("카우트 중 에러발생 : ", error));
    } else {
      console.log("이미 카운트된 방문자")
    }
  }, []);

  return (
    <Box m={0} p={0} backgroundColor="white" width="100%" height="100vh">
      <Container centerContent maxWidth="100%" paddingX={0} paddingY={0}>
        <HeaderSection />
        <ReservationForm />
        <VideoSection />
      </Container>
    </Box>
  );
}
