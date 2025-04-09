import React from "react";
import Header from "./Header";
import WelcomeSection from "./Welcome";
import ServicesSection from "./Services";
import StatsSection from "./Stats";
import TestimonialsSection from "./Testimonials";
import Client from "./Clients";
import NewsSection from "./News";
import FooterSection from "./Footer";

const Home = () => {
    return (
        <div>
        <Header />
        <WelcomeSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <Client />
        <NewsSection />  
        <FooterSection />      
        </div>
    );
    }
export default Home;