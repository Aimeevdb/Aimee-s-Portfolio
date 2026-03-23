import React from "react";
import { Heading, Text, Image, VStack, Center } from "@chakra-ui/react";
import myPhoto from "../images/mewithlonghair.jpg";  
const LandingSection = ({ greeting, bio1, bio2 }) => {
  return (
    <Center
      minHeight="100vh"
      id="home"
      bgGradient="linear(to-b, purple.500, #00FFFF)"
    >
      <VStack spacing={6} textAlign="center">
        <Image
          src={myPhoto}
          alt="Aimee's profile photo"
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
        />

        <Heading>{greeting}</Heading>

        <Text fontSize="lg">{bio1}</Text>
        <Text fontSize="lg">{bio2}</Text>
      </VStack>
    </Center>
  );
};

export default LandingSection;