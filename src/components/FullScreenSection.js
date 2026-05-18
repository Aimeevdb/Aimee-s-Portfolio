import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      width="100%"
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      p={boxProps.p}
      py={boxProps.py}
      spacing={boxProps.spacing}
      alignItems={boxProps.alignItems ?? "center"}
      bgGradient={boxProps.bgGradient}
    >
      <VStack
        width="100%"
        maxWidth="1280px"
        px={[4, 8, 16]}
        alignItems="flex-start"
      >
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;