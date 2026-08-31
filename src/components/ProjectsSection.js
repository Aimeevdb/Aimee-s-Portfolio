import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import mentamorphLogo from "../images/MentamorphLogo.png";
import brownieQuestPreview from "../images/BrownieQuest.png";

const projects = [
  {
    title: "Mentamorph",
    description: "Client project for a financial literacy game for teens. Brought on as UX Researcher, promoted to Research Coordinator mid-project.",
    link: "/mentamorph",
    tags: ["UX Case Study", "Figma", "User Research"],
    headerGradient: "linear-gradient(135deg, #3b0764 0%, #1e3a5f 50%, #134e2a 100%)",
    headerImage: mentamorphLogo,
  },
  {
    title: "Spectrum Care",
    description: "A UX case study tackling the frustrating process of finding a therapist — designing a clean, accessible provider search and booking experience that puts the right information upfront.",
    link: "/spectrum-care",
    tags: ["UX Case Study", "Figma", "Wireframing", "Prototyping"],
    headerGradient: "linear-gradient(180deg, #dce8f5 0%, #e8f0f8 50%, #f5f0e8 100%)",
    icon: "rainbow-arc",
  },
  {
    title: "Brownie Quest",
    description: "A gamified mobile app that helps people with ADHD break tasks into manageable steps — and actually finish them. Complete quests, earn rewards, build momentum with a brownie companion.",
    link: "/brownie-quest",
    tags: ["UX/UI Design", "Figma", "Mobile App", "In Progress"],
    headerGradient: "linear-gradient(135deg, #4A6FA5 0%, #7442A0 100%)",
    headerImage: brownieQuestPreview,
  },
  {
    title: "Little Lemon Booking Site",
    description: "Designing a seamless restaurant booking experience for Little Lemon.",
    link: "/little-lemon",
    tags: ["Frontend", "React", "UX Design"],
    headerGradient: "linear-gradient(135deg, #F4CE14 0%, #6b8f71 60%, #495E57 100%)",
    icon: "🍋",
  },
  {
    title: "Family Time",
    description: "A UX case study exploring design decisions and research insights. My first project.",
    link: "/family-time",
    tags: ["UX Case Study", "Figma", "Wireframing"],
    headerGradient: "linear-gradient(135deg, #fef08a 0%, #bbf7d0 33%, #bfdbfe 66%, #e9d5ff 100%)",
    icon: "calendar",
  },
];


const ProjectsSection = ({ embedded = false }) => {
  return (
    <Box
      bg={embedded ? "transparent" : "#fff7fb"}
      py={embedded ? 0 : 20}
      id={!embedded ? "projects-section" : undefined}
    >
      {!embedded && (
        <Heading
          as="h1"
          scrollMarginTop="100px"
          textAlign="center"
          mb={8}
        >
          Featured Projects
        </Heading>
      )}
      <SimpleGrid
        columns={[1, 2, 2]}
        spacing={6}
        px={embedded ? 0 : 4}
        justifyItems="center"
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
            headerGradient={project.headerGradient}
            icon={project.icon}
            headerImage={project.headerImage}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;