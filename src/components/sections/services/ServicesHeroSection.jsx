// src/components/sections/services/ServicesHeroSection.jsx
import { motion } from "framer-motion"
import GridDistortion from "@/components/ui/GridDistortion"
import servicesBgImage from "@/assets/images/building-img.jpg"

const ServicesHeroSection = () => {
    return (
        <section className="relative min-h-[60vh] sm:min-h-[70vh] w-full grid place-items-center overflow-hidden">

            {/* Background Image Layer - Mobile Optimized */}
            <div className="[grid-area:1/1] absolute inset-0 w-full h-full z-0">
                <GridDistortion
                    imageSrc={servicesBgImage}
                    className="w-full h-full [&>canvas]:object-cover [&>canvas]:object-center [&>canvas]:w-full [&>canvas]:h-full"
                    grid={20}
                    mouse={0.05}
                    strength={0.1}
                    relaxation={0.9}
                />
            </div>

            {/* Hero Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="[grid-area:1/1] relative z-10 max-w-3xl mx-auto text-center px-4 sm:px-6"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 leading-tight">
                    Our Services
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-neutral-800">
                    Comprehensive digital solutions tailored to your business needs
                </p>
            </motion.div>
        </section>
    )
}

export default ServicesHeroSection