import LandingSection from "../components/LandingSection";
import AboutSection from "../components/AboutSection";
import ContactMeSection from "../components/ContactMeSection";

export default function Home() {
  return (
    <>
      <LandingSection
        greeting="Hi, I'm Aimee"
        bio1="Rideshare driver turned UX Designer & Frontend Developer. Seven years reading people, solving problems on the fly, and earning 5-star ratings."
        bio2="Now I design and build digital products that feel effortless to use — and handle the whole thing myself, from research to a live React app."
      />
      <AboutSection />
      <ContactMeSection />
    </>
  );
}