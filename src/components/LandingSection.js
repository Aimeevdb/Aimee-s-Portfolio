import React from "react";
import { Heading, Text, Image, VStack, Box, Flex } from "@chakra-ui/react";
import myPhoto from "../images/Profile1.png";
import ProjectsSection from "./ProjectsSection";

const LandingSection = ({ greeting, bio1, bio2 }) => {
  return (
    <Flex
      minHeight="100vh"
      id="home"
      bgGradient="linear(to-b, purple.600, purple.200)"
      pt="80px"
      px={[6, 10, 20]}
      direction={["column", "column", "row"]}
      align="center"
      justify="center"
      gap={10}
    >
      {/* Left — Hero */}
      <VStack
        spacing={6}
        textAlign="center"
        maxW={["100%", "100%", "380px"]}
        flex="1"
      >
        <Image
          src={myPhoto}
          alt="Aimee's profile photo"
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          boxShadow="lg"
        />
        <Heading color="white" size={["xl", "2xl"]}>{greeting}</Heading>
        <Text fontSize={["md", "lg"]} color="whiteAlpha.900">{bio1}</Text>
        <Text fontSize={["md", "lg"]} color="whiteAlpha.900">{bio2}</Text>
      </VStack>

      {/* Right — Projects */}
      <Box
        flex="1.5"
        w="100%"
        maxW={["100%", "100%", "680px"]}
        overflowY="auto"
        maxH={["none", "none", "80vh"]}
      >
        <ProjectsSection embedded />
      </Box>
    </Flex>
  );
};

export default LandingSection;