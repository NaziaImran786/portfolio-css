
import AboutSection from "@/components/about-section/AboutSection";
import Header from "../components/hearder/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import PortfolioSection from "@/components/Portfolio-Section/PortfolioSection";
import AboutBottomSection from "@/components/about-bottom-section/AboutBottomSection";
import Services from "@/components/services-section/ServiceSection";
import ContactUs from "@/components/contact-section/ContactSection";
import FooterSection from "@/components/footer-section/FooterSection";
import Testimonials from "@/components/testimonials/Testimonials";


export default function Home() {
  return (
   <div >
   <Header />
   <HeroSection />   
   <AboutSection />
   <AboutBottomSection />
   <PortfolioSection />
   <Services/>
   <Testimonials/>
   <ContactUs/>
   <FooterSection/>
   </div>
  );
}
