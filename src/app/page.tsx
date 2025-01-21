"use client";

import { Box, Container } from "@chakra-ui/react";
import { HeaderSection } from "./components/HeaderSection";
import { ReservationForm } from "./components/ReservationForm";
import { VideoSection } from "./components/VideoSection";

export default function Home() {
  return (
    <Box bg="white" minH="100vh" py={10}>
      <Container maxW="container.md">
        <HeaderSection />
        <ReservationForm />
        <VideoSection />
      </Container>
    </Box>
  );
}
