import React from "react";
import { Heading, Text, Image, VStack, Box, Flex, Button } from "@chakra-ui/react";
import myPhoto from "../images/Profile1.png";
import ProjectsSection from "./ProjectsSection";

const LandingSection = ({ greeting, bio1, bio2 }) => {
  return (
    <Flex
      minHeight="100vh"
      id="home"
      bgGradient="linear(to-b, purple.200, purple.600)"
      pt="80px"
      pb={[10, 12, 16]}
      px={[6, 10, 20]}
      direction={["column", "column", "row"]}
      align="center"
      justify="center"
      gap={8}
    >
      {/* Left — Hero */}
      <VStack
        spacing={4}
        textAlign="center"
        maxW={["100%", "100%", "440px"]}
        flex="1.3"
      >
        <Image
          src={myPhoto}
          alt="Aimee's profile photo"
          borderRadius="full"
          boxSize="120px"
          objectFit="cover"
          boxShadow="lg"
        />
        <Heading color="white" size={["lg", "xl"]}>{greeting}</Heading>
        <Text fontSize={["sm", "md"]} color="whiteAlpha.900">{bio1}</Text>
        <Text fontSize={["sm", "md"]} color="whiteAlpha.900">{bio2}</Text>
        <Button
          as="a"
          href="#contactme-section"
          mt={2}
          size="lg"
          bg="white"
          color="purple.700"
          fontWeight="semibold"
          rounded="lg"
          boxShadow="md"
          _hover={{ bg: "purple.50", transform: "translateY(-2px)", boxShadow: "lg" }}
          _active={{ transform: "translateY(0)" }}
          transition="all 0.15s ease"
        >
          Let's work together →
        </Button>
      </VStack>

      {/* Right — Projects */}
      <Box
        flex="1"
        w="100%"
        maxW={["100%", "100%", "560px"]}
        overflowY="auto"
        maxH={["none", "none", "80vh"]}
      >
        <ProjectsSection embedded />
      </Box>
    </Flex>
  );
};

export default LandingSection;