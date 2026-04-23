import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import OurWorks from "./pages/OurWorks";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MobileNavbar from "./components/MobileNavbar";

import ScrollToTop from "./components/ScrollToTop";
import ConstructionCivilEngineering from "./pages/construction-&-civil-engineering";
import LandSurveyingConsultancy from "./pages/land-surveying-&-consultancy";
import ArchitecturalDesign from "./pages/architectural-design";
import RealEstateDevelopment from "./pages/real-estate-development";
import ProjectManagement from "./pages/project-management";
import BuildingMaterialsSupply from "./pages/building-materials-supply";
import ElectricalMechanicalWorks from "./pages/electrical-mechanical";
import GraphicDesignBranding from "./pages/graphic-design-&-branding";
import DigitalMarketing from "./pages/digital-marketing";
import WebsiteUIUXDesign from "./pages/web-uiux";
import PrintingProduction from "./pages/printing-production";
import ProcurementLogistics from "./pages/procurement-logistics";
import StrategicConsultancy from "./pages/strategic-consultancy";
import BlogPage from "./pages/Blog";

export default function App() {
    return (
        <>
            <Navbar />
            <MobileNavbar />

            <ScrollToTop />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/OurWorks" element={<OurWorks />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/construction-&-civil-engineering" element={<ConstructionCivilEngineering/>} />
                <Route path="/land-surveying-&-consultancy" element={<LandSurveyingConsultancy/>} />
                <Route path="/architectural-design" element={<ArchitecturalDesign />} />
                <Route path="/real-estate-development" element={<RealEstateDevelopment />} />
                <Route path="/project-management" element={<ProjectManagement />} />
                <Route path="/building-materials-supply" element={<BuildingMaterialsSupply />} />
                <Route path="/electrical-mechanical" element={<ElectricalMechanicalWorks />} />
                <Route path="/graphic-design-&-branding" element={<GraphicDesignBranding />} />
                <Route path="/videography-media-production" element={<ProjectManagement />} />
                <Route path="/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/web-uiux" element={<WebsiteUIUXDesign />} />
                <Route path="/printing-production" element={<PrintingProduction />} />
                <Route path="/procurement-logistics" element={<ProcurementLogistics />} />
                <Route path="/strategic-consultancy" element={<StrategicConsultancy />} />
                <Route path="/blog" element={<BlogPage />} />
                
                
            </Routes>

            <Footer />
        </>
    );
}