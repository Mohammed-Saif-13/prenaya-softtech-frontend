// src/components/sections/home/HeroSection.jsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import GridDistortion from '@/components/ui/GridDistortion'
import heroBgImage from '@/assets/images/building-img.webp'

const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full grid place-items-center overflow-hidden bg-white">

            {/* Background Image Layer */}
            <div className="[grid-area:1/1] absolute inset-0 w-full h-full z-0">
                <GridDistortion
                    imageSrc={heroBgImage}
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
                className="[grid-area:1/1] relative z-10 flex flex-col items-center gap-3 sm:gap-4 md:gap-6 px-4 sm:px-6 lg:px-8 py-8 text-center max-w-6xl mx-auto"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black tracking-tighter leading-[1.1] sm:leading-tight">
                    Innovative Solutions for Digital Transformation
                </h1>

                <p className="font-light text-sm sm:text-base md:text-lg lg:text-xl text-neutral-700 leading-relaxed max-w-2xl">
                    We create cutting-edge web applications, mobile apps, and digital solutions that drive business growth and enhance user experiences.
                </p>

                {/* Call-to-action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto px-4 sm:px-0 font-heading">

                    {/* Get Started Button - Updated link with anchor */}
                    <Link to="/contact#contact-form" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto min-w-[160px]">
                            Get Started
                        </Button>
                    </Link>

                    {/* View My Work Button */}
                    <Link to="/portfolio" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="w-full sm:w-auto min-w-[160px]">
                            View Our Work
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </section>
    )
}

export default HeroSection