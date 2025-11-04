// src/pages/ServicesPage.jsx
import React from "react";
import ServicesHeroSection from "@/components/sections/ServicesHeroSection";
import ServicesListSection from "@/components/sections/ServicesListSection";
import DevelopmentProcessSection from "@/components/sections/DevelopmentProcessSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import StartProjectSection from "@/components/sections/StartProjectSection";

const ServicesPage = () => {
    return (
        <>
            <ServicesHeroSection />
            <ServicesListSection />
            <DevelopmentProcessSection />
            <TechnologiesSection />
            <StartProjectSection/>
        </>
    );
};

export default ServicesPage;