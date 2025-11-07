// src/pages/PortfolioPage.jsx
import PortfolioHeroSection from "@/components/sections/portfolio/PortfolioHeroSection"
import ProjectsShowcaseSection from "@/components/sections/portfolio/ProjectsShowcaseSection"
import TestimonialsSection from "@/components/sections/portfolio/TestimonialsSection"
import StartProjectSection from "@/components/sections/StartProjectSection"

const PortfolioPage = () => {
    return (
        <>
            <PortfolioHeroSection />
            <ProjectsShowcaseSection />
            <TestimonialsSection />
            <StartProjectSection />
        </>
    )
}

export default PortfolioPage