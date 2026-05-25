import LandingSection from "../components/LandingSection";
import AboutSection from "../components/AboutSection";
import ContactMeSection from "../components/ContactMeSection";

export default function Home() {
  return (
    <>
      <LandingSection
        greeting="Hi, I'm Aimee"
        bio1="I enjoy turning ideas into clean, user-friendly digital experiences."
        bio2="Blending design and front-end development, I'm continuously learning and currently exploring Python and intelligent systems."
      />
      <AboutSection />
      <ContactMeSection />
    </>
  );
}