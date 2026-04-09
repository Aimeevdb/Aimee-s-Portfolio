import React from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

import bookingsite from "../images/booking.png";
import mentaMorph from "../images/MentamorphCaseStudy.png";
import spectrumImage from "../images/spectrumcare.png";
import familytime from "../images/familytime.png";

const projects = [
  {
    title: "Little Lemon Booking Site",
    description: "Designing a seamless restaurant booking experience for Little Lemon.",
    getImageSrc: () => bookingsite,
    link: "https://little-lemon-booking-by-aimee.netlify.app/",
  },

  {
    title: "Mentamorph",
    description: "A UX case study focused teaching youth and their families about financial resiliency in a gamified environment.",
    getImageSrc: () => mentaMorph,
    link: "https://docs.google.com/presentation/d/1iJmHMGBb0r2g8qrxms0EwOvjJVEWSSiDjCJ0M13HqPc/present",
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