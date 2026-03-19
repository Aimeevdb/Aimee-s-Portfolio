import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      width="100%"
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      p={boxProps.p}          // ⭐ padding belongs OUTSIDE
      spacing={boxProps.spacing}
      alignItems={boxProps.alignItems}
      bgGradient={boxProps.bgGradient}
    >
      <VStack maxWidth="1280px" minHeight="100vh">
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;