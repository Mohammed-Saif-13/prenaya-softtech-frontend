// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import StatsMarqueeSection from '@/components/sections/StatsMarqueeSection';
import ServicesSection from '@/components/sections/ServicesSection';
import GetInTouchSection from '@/components/sections/GetInTouchSection';


const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <StatsMarqueeSection />
            <ServicesSection />
            <GetInTouchSection/>
        </div>
    );
};

export default HomePage;