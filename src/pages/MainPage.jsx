import OfferSection from "../components/sections/OfferSection.jsx";
import MenuSection from "../components/sections/MenuSection.jsx";
import AboutUs from "../components/sections/AboutUs.jsx";
import Home from "../components/sections/Home.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/Footer.jsx";

const MainPage = () => {

    return (
        <>
            <Home />
            <OfferSection />
            <MenuSection />
            <AboutUs />
            <Contact />
            <Footer />
        </>
    )
}

export default MainPage;