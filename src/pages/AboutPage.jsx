// src/pages/AboutPage.jsx

import React from 'react'
import AboutHeroSection from '@/components/sections/AboutHeroSection'
import MissionVisionSection from '@/components/sections/MissionVisionSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import OurJourneyTimeline from '@/components/sections/OurJourneyTimeline'
import TeamSection from '@/components/sections/TeamSection'
import CallToActionSection from '@/components/sections/CallToActionSection'

const AboutPage = () => {
    return (
        <div>
            <AboutHeroSection />
            <MissionVisionSection />
            <WhyChooseUsSection />
            <OurJourneyTimeline />
            <TeamSection/>
            <CallToActionSection/>
        </div>
    )
}

export default AboutPage