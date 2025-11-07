// src/pages/HomePage.jsx
import HeroSection from '@/components/sections/home/HeroSection'
import StatsMarqueeSection from '@/components/sections/home/StatsMarqueeSection'
import ServicesSection from '@/components/sections/home/ServicesSection'
import GetInTouchSection from '@/components/sections/home/GetInTouchSection'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <StatsMarqueeSection />
            <ServicesSection />
            <GetInTouchSection />
        </>
    )
}

export default HomePage