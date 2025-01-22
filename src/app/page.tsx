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
            return response.json();
          } else {
            throw new Error("응답 없음.");
          }
        })
        .then((data) => {
          console.log(data.message);
          localStorage.setItem(userVisited, "true");
        })
        .catch((error) => console.error(error));
    } else {
      console.log("이미 카운트된 방문자");
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
