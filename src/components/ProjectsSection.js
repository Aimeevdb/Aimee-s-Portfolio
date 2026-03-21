import React from "react";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

import photo1 from "../images/myphoto.jpg";
import photo2 from "../images/myphoto.jpg";
import photo3 from "../images/myphoto.jpg";
import photo4 from "../images/myphoto.jpg";

const projects = [
  {
    title: "React Space",
    description: "A responsive website built with React.",
    getImageSrc: () => photo1,
  },
  {
    title: "React Infinite Scroll",
    description: "An infinite scroll component for React.",
    getImageSrc: () => photo2,
  },
  {
    title: "Photo Gallery",
    description: "A gallery layout using CSS Grid.",
    getImageSrc: () => photo3,
  },
  {
    title: "Event Planner",
    description: "A full-stack event planning app.",
    getImageSrc: () => photo4,
  },
];

const ProjectsSection = () => {
  return (
    <>
      <Heading
        as="h1"
        id="projects-section"
        scrollMarginTop="100px"
        textAlign="center"
        mb={8}
      >
        Featured Projects
      </Heading>

      <SimpleGrid columns={[1, 2, 2]} spacing={10} px={4}>
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.getImageSrc()}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProjectsSection;