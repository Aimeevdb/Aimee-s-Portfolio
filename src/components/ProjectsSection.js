import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Booking Site",
    description: "Designing a seamless restaurant booking experience for Little Lemon.",
    link: "/little-lemon",
    tags: ["Frontend", "React", "UX Design"],
  },
  {
    title: "Mentamorph",
    description: "A UX case study focused teaching youth and their families about financial resiliency in a gamified environment.",
    link: "/mentamorph",
    tags: ["UX Case Study", "Figma", "User Research"],
  },
  {
    title: "Spectrum Care",
    description: "A UX case study tackling the frustrating process of finding a therapist — designing a clean, accessible provider search and booking experience that puts the right information upfront.",
    link: "/spectrum-care",
    tags: ["UX Case Study", "Figma", "Wireframing", "Prototyping"],
  },
  {
    title: "Family Time",
    description: "A UX case study exploring design decisions and research insights. My first project.",
    link: "/family-time",
    tags: ["UX Case Study", "Figma", "Wireframing"],
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
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;