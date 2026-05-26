import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";

const socials = [
  { icon: faEnvelope, url: "mailto:aimeevdb@gmail.com" },
  { icon: faLinkedin, url: "https://www.linkedin.com/in/aimee-van-den-broeke/" },
  { icon: faGithub, url: "https://github.com/Aimeevdb" },
];

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (anchor) => (e) => {
    e.preventDefault();

    if (anchor === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (location.pathname !== "/") navigate("/");
      if (isOpen) onToggle();
      return;
    }

    const id = `${anchor}-section`;

    if (location.pathname === "/") {
      // Already on home — just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // On a project page — go home first, then scroll after navigation
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }

    if (isOpen) onToggle();
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="rgba(24, 24, 27, 0.7)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid rgba(255,255,255,0.08)"
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={{ base: 4, md: 16 }} py={3} justifyContent="space-between" alignItems="center">
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <a key={social.url} href={social.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </HStack>
          </nav>
          <Box fontWeight="bold" textAlign="center">
            <Text fontSize="sm" display={{ base: "block", md: "none" }}>Aimee</Text>
            <Text fontSize="xl" display={{ base: "none", md: "block" }}>Aimee | UX Designer | Frontend Developer</Text>
          </Box>
          <nav>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <a href="#home" onClick={handleClick("home")}>Home</a>
              <a href="#about-section" onClick={handleClick("about")}>About</a>
              <a href="#contactme-section" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
          <IconButton
            display={{ base: "flex", md: "none" }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={onToggle}
            aria-label="Toggle Navigation"
            variant="ghost"
            color="white"
          />
        </HStack>
        {isOpen && (
          <div style={{ display: "flex", flexDirection: "column", width: "100%", background: "rgba(24, 24, 27, 0.95)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <a href="#home" onClick={handleClick("home")} style={{ color: "white", textAlign: "center", padding: "12px 0", textDecoration: "none" }}>Home</a>
            <a href="#about-section" onClick={handleClick("about")} style={{ color: "white", textAlign: "center", padding: "12px 0", textDecoration: "none" }}>About</a>
            <a href="#contactme-section" onClick={handleClick("contactme")} style={{ color: "white", textAlign: "center", padding: "12px 0", textDecoration: "none" }}>Contact Me</a>
          </div>
        )}
      </Box>
    </Box>
  );
};

export default Header;