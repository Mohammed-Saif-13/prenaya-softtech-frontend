// src/pages/AboutPage.jsx
import AboutHeroSection from '@/components/sections/about/AboutHeroSection'
import MissionVisionSection from '@/components/sections/about/MissionVisionSection'
import WhyChooseUsSection from '@/components/sections/about/WhyChooseUsSection'
import OurJourneyTimeline from '@/components/sections/about/OurJourneyTimeline'
import TeamSection from '@/components/sections/about/TeamSection'
import CallToActionSection from '@/components/sections/CallToActionSection'

const AboutPage = () => {
    return (
        <>
            <AboutHeroSection />
            <MissionVisionSection />
            <WhyChooseUsSection />
            <OurJourneyTimeline />
            <TeamSection />
            <CallToActionSection />
        </>
    )
}

export default AboutPage