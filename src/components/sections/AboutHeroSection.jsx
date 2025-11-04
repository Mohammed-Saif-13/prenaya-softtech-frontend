// src/components/sections/AboutHeroSection.jsx

import React from "react";
import { motion } from "framer-motion";
import GridDistortion from "@/components/ui/GridDistortion";
import aboutBgImage from "@/assets/images/about-hero-bg.jpg";

const AboutHeroSection = () => {
    return (

        <section className="relative h-[60vh] w-full grid place-items-center overflow-hidden">

            {/* Background Layer */}
            <GridDistortion
                imageSrc={aboutBgImage}
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
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} // ✅ 4. Transition ko HeroSection jaisa banaya
                className="[grid-area:1/1] relative z-10 max-w-3xl mx-auto text-center"
            >
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                    About Prenaya Softtech
                </h1>
                <p className="text-lg text-neutral-800">
                    Innovation, Excellence, and Digital Transformation
                </p>
            </motion.div>
        </section>
    );
};

export default AboutHeroSection;