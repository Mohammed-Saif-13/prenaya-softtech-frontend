// src/components/sections/ContactHeroSection.jsx

import React from "react";
import { motion } from "framer-motion";
import GridDistortion from "@/components/ui/GridDistortion";

// IMPORTANT: Yahan apni contact page ke liye koi aachi si background image daal de
import contactBgImage from "@/assets/images/building-img.jpg";

const ContactHeroSection = () => {
    return (
        <section className="relative h-[60vh] w-full grid place-items-center overflow-hidden">
            {/* Background Layer */}
            <GridDistortion
                imageSrc={contactBgImage} // Image badal di hai
                className="[grid-area:1/1] w-full h-full z-0"
                grid={20}
                mouse={0.05}
                strength={0.1}
                relaxation={0.9}
            />

            {/* Content Layer */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="[grid-area:1/1] relative z-10 max-w-3xl mx-auto text-center"
            >
                {/* Text badal diya hai */}
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                    Get in Touch
                </h1>
                <p className="text-lg text-neutral-800">
                    Have a question or a project in mind? We'd love to hear from you.
                </p>
            </motion.div>
        </section>
    );
};

export default ContactHeroSection;