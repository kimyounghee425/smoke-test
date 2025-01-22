"use client";
import "./global.css"
import { Box, Container } from "@chakra-ui/react";
import { HeaderSection } from "./components/HeaderSection";
import { ReservationForm } from "./components/ReservationForm";
import { VideoSection } from "./components/VideoSection";

export default function Home() {
  return (
    <Box m={0} p={0} backgroundColor="white" width="100vw" height="100vh">
      <Container centerContent maxWidth="100%" paddingX={0} paddingY={0}>
        <HeaderSection />
        <ReservationForm />
        <VideoSection />
      </Container>
    </Box>
  );
}
