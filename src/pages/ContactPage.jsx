// src/pages/ContactPage.jsx
import ContactHeroSection from "@/components/sections/contact/ContactHeroSection"
import GetInTouchSection from "@/components/sections/home/GetInTouchSection"
import WhyChooseUsSection from "@/components/sections/about/WhyChooseUsSection"
import FaqSection from "@/components/sections/contact/FaqSection"

const ContactPage = () => {
    return (
        <>
            <ContactHeroSection />
            <GetInTouchSection />
            <WhyChooseUsSection />
            <FaqSection />
        </>
    )
}

export default ContactPage