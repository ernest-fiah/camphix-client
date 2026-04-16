import CompanyLogos from "../components/companyLogos";
import Hero from "../components/hero";
import OurWorks from "../components/ourWorks";
import Services from "../components/services";
import Testimonials from "../components/testimonials";
import CallToAction from "../components/callToAction";
import Faqs from "../components/faqs";



const Home = () => {
    return (
        <>
            <Hero />
            <CompanyLogos />
            <Services />
            <OurWorks />
            <Testimonials />
            <Faqs />
            <CallToAction />
        </>
    );
};

export default Home;