import React from "react";
import { Box, VStack, HStack, Image, Heading, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, image, link }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      padding={4}
      maxW="300px"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
    >
      <VStack spacing={4} align="start">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image
              src={image}
              alt={title}
              borderRadius="md"
              width="100%"
              height="180px"
              objectFit="contain"
              bg="gray.100"
            />
          </a>
        ) : (
          <Image
            src={image}
            alt={title}
            borderRadius="md"
            width="100%"
            height="180px"
            objectFit="contain"
            bg="gray.100"
          />
        )}

        <VStack spacing={2} align="start">
          <Heading size="md">{title}</Heading>
          <Text fontSize="sm">{description}</Text>
        </VStack>

        <HStack justify="flex-end" w="100%">
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;