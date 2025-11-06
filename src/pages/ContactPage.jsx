// src/pages/ContactPage.jsx

import React from "react";
import ContactHeroSection from "@/components/sections/ContactHeroSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FaqSection from "@/components/sections/FaqSection";

const ContactPage = () => {
    return (
        <>
            <ContactHeroSection />
            <GetInTouchSection />
            <WhyChooseUsSection/>
            <FaqSection/>
        </>
    );
};

export default ContactPage;