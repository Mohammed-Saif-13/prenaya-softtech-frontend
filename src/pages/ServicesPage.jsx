// src/pages/ServicesPage.jsx
import ServicesHeroSection from "@/components/sections/services/ServicesHeroSection"
import ServicesListSection from "@/components/sections/services/ServicesListSection"
import DevelopmentProcessSection from "@/components/sections/services/DevelopmentProcessSection"
import TechnologiesSection from "@/components/sections/services/TechnologiesSection"
import StartProjectSection from "@/components/sections/StartProjectSection"

const ServicesPage = () => {
    return (
        <>
            <ServicesHeroSection />
            <ServicesListSection />
            <DevelopmentProcessSection />
            <TechnologiesSection />
            <StartProjectSection />
        </>
    )
}

export default ServicesPage