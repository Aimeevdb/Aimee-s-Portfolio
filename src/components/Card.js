import React from "react";
import { Box, VStack, HStack, Heading, Text, Button, Badge } from "@chakra-ui/react";

const Card = ({ title, description, link, tags = [] }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding={6}
      w="100%"
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "translateY(-2px)", transition: "all 0.2s" }}
      display="flex"
      flexDirection="column"
      bg="white"
      borderColor="gray.200"
    >
      <VStack spacing={4} align="start" flex="1">

        {/* Tags row */}
        {tags.length > 0 && (
          <HStack spacing={2} flexWrap="wrap">
            {tags.map((tag) => (
              <Badge
                key={tag}
                colorScheme="purple"
                variant="subtle"
                fontSize="xs"
                px={2}
                py={1}
                borderRadius="full"
                textTransform={"none"}
              >
                {tag}
              </Badge>
            ))}
          </HStack>
        )}

        {/* Title and description */}
        <VStack spacing={2} align="start" flex="1">
          <Heading size="md">{title}</Heading>
          <Text fontSize="sm" color="gray.600" lineHeight="1.6">
            {description}
          </Text>
        </VStack>

        {/* CTA */}
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