import LandingSection from "../components/LandingSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactMeSection from "../components/ContactMeSection";

export default function Home() {
  return (
    <>
      <LandingSection
        greeting="Hi, I’m Aimee"
        bio1="UX/UI Designer & Creative Technologist"
        bio2="Crafting inclusive, accessible, emotionally intelligent digital experiences."
      />

      <ProjectsSection />
        <ContactMeSection />  
    </>
  );
}