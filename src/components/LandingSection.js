import React from "react";
import { Heading, Text, Image, VStack, Center } from "@chakra-ui/react";
import myPhoto from "../images/Profile1.png";

const LandingSection = ({ greeting, bio1, bio2 }) => {
  return (
    <Center
      minHeight="100vh"
      id="home"
      bgGradient="linear(to-b, purple.600, purple.200)"
      pt="80px"
      px={[6, 10, 20]}
    >
      <VStack spacing={6} textAlign="center" maxW="600px">
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
    </Center>
  );
};

export default LandingSection;