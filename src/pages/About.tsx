import Faqs from "../components/faqs";
import AboutOwner from "../sections/AboutOwner";
import OurProcess from "../sections/OurProcess";
import OurStory from "../sections/OurStory";


const About = () => {
  return (
    <>
      {/* other sections */}
      <OurStory />
      {/* other sections */}
      <AboutOwner />

      <OurProcess />

      <Faqs />
    </>
  );
};

export default About;