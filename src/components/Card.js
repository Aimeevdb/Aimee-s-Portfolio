import React from "react";
import { Box, VStack, Image, Heading, Text, Button } from "@chakra-ui/react";

const Card = ({ title, description, image, link }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding={4}
      w="100%"
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "translateY(-2px)", transition: "all 0.2s" }}
      display="flex"
      flexDirection="column"
    >
      <VStack spacing={4} align="start" flex="1">
        <Image
          src={image}
          alt={title}
          borderRadius="md"
          width="100%"
          height="180px"
          objectFit="cover"
          bg="gray.100"
        />

        <VStack spacing={2} align="start" flex="1">
          <Heading size="md">{title}</Heading>
          <Text fontSize="sm" color="gray.600">{description}</Text>
        </VStack>

        {link && (
          <Button
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            colorScheme="purple"
            size="sm"
            w="100%"
            mt="auto"
          >
            View Project
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default Card;