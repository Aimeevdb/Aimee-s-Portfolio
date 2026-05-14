import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  Box,
  HStack,
  VStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const socials = [
  { icon: faEnvelope, url: "mailto:aimeevdb@gmail.com" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/aimee-van-den-broeke/" },
  { icon: faGithub, url: "https://github.com/Aimeevdb" },
];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="rgba(24, 24, 27, 0.7)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid rgba(255,255,255,0.08)"
      zIndex={1000}

    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Left: social links */}
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </HStack>
          </nav>

{/* Mobile Dropdown Menu */}
{isOpen && (
  <VStack
    display={{ md: "none" }}
    spacing={4}
    pb={4}
    bg="rgba(24, 24, 27, 0.95)"
  >
    <a
      href="#projects-section"
      onClick={() => {
        handleClick("projects")();
        onToggle();
      }}
    >
      Projects
    </a>

    <a
      href="#contactme-section"
      onClick={() => {
        handleClick("contactme")();
        onToggle();
      }}
    >
      Contact Me
    </a>
  </VStack>
)}
          {/* Center: Portfolio name */}
          <Box fontWeight="bold" fontSize="xl">
            Aimee | UX Designer | Frontend Developer
          </Box>

{/* Desktop Navigation */}
<nav>
  <HStack
    spacing={8}
    display={{ base: "none", md: "flex" }}
  >
    <a href="#projects-section" onClick={handleClick("projects")}>
      Projects
    </a>

    <a href="#contactme-section" onClick={handleClick("contactme")}>
      Contact Me
    </a>
  </HStack>
</nav>

{/* Mobile Hamburger Button */}
<IconButton
  display={{ base: "flex", md: "none" }}
  icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
  onClick={onToggle}
  aria-label="Toggle Navigation"
  variant="ghost"
  color="white"
/>        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
