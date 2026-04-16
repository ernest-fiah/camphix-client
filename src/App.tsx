import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import OurWorks from "./pages/OurWorks";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";

import ScrollToTop from "./components/ScrollToTop";

export default function App() {
    return (
        <>
            <Navbar />

            <ScrollToTop />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/OurWorks" element={<OurWorks />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </>
    );
}