import LandingSection from "../components/LandingSection";
import AboutSection from "../components/AboutSection";
import ColophonSection from "../components/ColophonSection";
import ContactMeSection from "../components/ContactMeSection";
import usePageMeta from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta();
  return (
    <>
      <LandingSection
        greeting="Hi, I'm Aimee"
        bio1="Rideshare driver turned UX Designer & Frontend Developer. Seven years reading people, solving problems on the fly, and earning 5-star ratings."
        bio2="Now I design and build digital products that feel effortless to use — and handle the whole thing myself, from research to a live React app. This site included: designed in Figma, coded in React, deployed by me."
      />
      <AboutSection />
      <ColophonSection />
      <ContactMeSection />
    </>
  );
}
