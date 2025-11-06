import React from "react";
import { motion } from "framer-motion";
import GridDistortion from "@/components/ui/GridDistortion";
import portfolioBgImage from "@/assets/images/building-img.jpg";

const PortfolioHeroSection = () => {
    return (
        <section className="relative h-[60vh] w-full grid place-items-center overflow-hidden">
            {/* Background Layer */}
            <GridDistortion
                imageSrc={portfolioBgImage}
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
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                    Selected Works from Our Portfolio
                </h1>
                <p className="text-lg text-neutral-800">
                    Discover our latest projects and digital solutions
                </p>
            </motion.div>
        </section>
    );
};

export default PortfolioHeroSection;