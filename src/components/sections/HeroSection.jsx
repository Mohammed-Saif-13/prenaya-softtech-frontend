// src/components/sections/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import GridDistortion from '@/components/ui/GridDistortion';
import heroBgImage from '@/assets/images/hero-bg.jpg';

const HeroSection = () => {
    return (
        <section className="relative h-screen w-full grid place-items-center overflow-hidden bg-white">

            {/* Background Layer */}
            <GridDistortion
                imageSrc={heroBgImage}
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
                className="[grid-area:1/1] relative z-10 flex flex-col items-center gap-4 px-4 text-center"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-tighter">
                    Innovative Solutions for Digital Transformation
                </h1>
                <p className="font-light text-base md:text-xl text-neutral-700 py-4 max-w-2xl">
                    We create cutting-edge web applications, mobile apps, and digital solutions that drive business growth and enhance user experiences.
                </p>


                <div className="font-heading flex flex-col sm:flex-row items-center gap-4 ">
                    {/* Primary Button */}
                    <Button size="lg">
                        Get Started
                    </Button>
                    {/* Secondary Button */}
                    <Button size="lg" variant="outline">
                        View My Work
                    </Button>
                </div>
            </motion.div>

        </section>
    );
};

export default HeroSection;