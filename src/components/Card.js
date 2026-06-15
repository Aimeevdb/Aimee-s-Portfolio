import React from "react";
import { Box, VStack, HStack, Heading, Text, Button, Badge } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const isInternal = (link) => link && link.startsWith("/");

// Rainbow arc SVG — six concentric semicircular arcs
const RainbowArc = () => (
  <svg viewBox="0 0 200 100" width="180" height="90" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))" }}>
    <path d="M 5,100 A 95,95 0 0,1 195,100" fill="none" stroke="#e53e3e" strokeWidth="10" strokeLinecap="round" />
    <path d="M 17,100 A 83,83 0 0,1 183,100" fill="none" stroke="#ed8936" strokeWidth="10" strokeLinecap="round" />
    <path d="M 29,100 A 71,71 0 0,1 171,100" fill="none" stroke="#ecc94b" strokeWidth="10" strokeLinecap="round" />
    <path d="M 41,100 A 59,59 0 0,1 159,100" fill="none" stroke="#48bb78" strokeWidth="10" strokeLinecap="round" />
    <path d="M 53,100 A 47,47 0 0,1 147,100" fill="none" stroke="#4299e1" strokeWidth="10" strokeLinecap="round" />
    <path d="M 65,100 A 35,35 0 0,1 135,100" fill="none" stroke="#805ad5" strokeWidth="10" strokeLinecap="round" />
  </svg>
);

// Calendar icon SVG
const CalendarIcon = () => (
  <svg viewBox="0 0 64 64" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <rect x="6" y="12" width="52" height="46" rx="5" ry="5" fill="white" opacity="0.95" />
    {/* Header bar */}
    <rect x="6" y="12" width="52" height="16" rx="5" ry="5" fill="#6b46c1" />
    <rect x="6" y="20" width="52" height="8" fill="#6b46c1" />
    {/* Ring left */}
    <rect x="18" y="6" width="5" height="14" rx="2.5" fill="#4c1d95" />
    {/* Ring right */}
    <rect x="41" y="6" width="5" height="14" rx="2.5" fill="#4c1d95" />
    {/* Grid dots */}
    <rect x="14" y="34" width="7" height="6" rx="1.5" fill="#d6bcfa" />
    <rect x="28" y="34" width="7" height="6" rx="1.5" fill="#d6bcfa" />
    <rect x="42" y="34" width="7" height="6" rx="1.5" fill="#d6bcfa" />
    <rect x="14" y="46" width="7" height="6" rx="1.5" fill="#e9d8fd" />
    <rect x="28" y="46" width="7" height="6" rx="1.5" fill="#6b46c1" opacity="0.7" />
    <rect x="42" y="46" width="7" height="6" rx="1.5" fill="#e9d8fd" />
  </svg>
);

const CardIcon = ({ icon }) => {
  if (icon === "rainbow-arc") return <RainbowArc />;
  if (icon === "calendar") return <CalendarIcon />;
  return <span style={{ fontSize: "3rem", lineHeight: 1 }}>{icon}</span>;
};

const Card = ({ title, description, link, tags = [], headerGradient, icon, headerImage }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      w="100%"
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "translateY(-4px)", transition: "all 0.25s ease" }}
      display="flex"
      flexDirection="column"
      bg="white"
      borderColor="gray.200"
    >
      {/* Gradient header with optional image or icon */}
      {headerGradient && (
        <Box
          background={headerGradient}
          h="120px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          {headerImage ? (
            <img
              src={headerImage}
              alt=""
              style={{ maxHeight: "90px", maxWidth: "80%", objectFit: "contain" }}
            />
          ) : icon ? (
            <CardIcon icon={icon} />
          ) : null}
        </Box>
      )}

      <VStack spacing={4} align="start" flex="1" p={6}>

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
                textTransform="none"
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

        {/* CTA — ghost/outlined with arrow, fills on hover */}
        {link && (
          isInternal(link) ? (
            <Button
              as={RouterLink}
              to={link}
              variant="outline"
              colorScheme="purple"
              size="sm"
              w="100%"
              mt="auto"
              borderWidth="1.5px"
              _hover={{ bg: "purple.600", color: "white", borderColor: "purple.600" }}
              transition="all 0.2s"
            >
              View Project →
            </Button>
          ) : (
            <Button
              as="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              colorScheme="purple"
              size="sm"
              w="100%"
              mt="auto"
              borderWidth="1.5px"
              _hover={{ bg: "purple.600", color: "white", borderColor: "purple.600" }}
              transition="all 0.2s"
            >
              View Project →
            </Button>
          )
        )}
      </VStack>
    </Box>
  );
};

export default Card;