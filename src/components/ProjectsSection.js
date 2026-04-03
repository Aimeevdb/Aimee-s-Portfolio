import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

import photo1 from "../images/myphoto.jpg";
import photo2 from "../images/myphoto.jpg";
import spectrumImage from "../images/spectrumcare.png";
import familytime from "../images/familytime.png";

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
    title: "Spectrum Care",
    description:
      "A UX case study focused on designing an inclusive support experience for neurodivergent users, emphasizing accessibility, clarity, and emotional safety.",
    getImageSrc: () => spectrumImage,
    link: "https://docs.google.com/presentation/d/1z3dJ51iwsrLsOPP2JKFR8KoIXkhMMT0hx6zoyZiT7fM/present",
  },

  {
    title: "Family Time",
    description: "A UX case study exploring design decisions and research insights. My first project.",
    getImageSrc: () => familytime,
    link: "https://docs.google.com/presentation/d/1rczfd_3AwJShuy16aaw72CQ-mfazugM1oy59Lddg6eI/present",
  },
];

const ProjectsSection = () => {
  return (
    <Box bg="#fff7fb" py={20}>
      <Heading
        as="h1"
        id="projects-section"
        scrollMarginTop="100px"
        textAlign="center"
        mb={8}
      >
        Featured Projects
      </Heading>

<SimpleGrid columns={[1, 2, 2]} spacing={10} px={4} justifyItems="center">        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.getImageSrc()}
            link={project.link}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProjectsSection;