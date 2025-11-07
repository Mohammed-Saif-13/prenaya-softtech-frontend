// src/components/sections/about/MissionVisionSection.jsx
import { Target, Eye } from "lucide-react"
import { motion } from "framer-motion"

// Mission & Vision data configuration
const missionVisionData = [
    {
        title: "Our Mission",
        icon: Target,
        description: "To empower businesses with cutting-edge digital solutions that drive growth, enhance efficiency, and create exceptional user experiences.",
    },
    {
        title: "Our Vision",
        icon: Eye,
        description: "To be the leading provider of digital transformation services, recognized globally for technical excellence, innovative solutions, and client-centric focus.",
    },
]

const MissionVisionSection = () => {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {missionVisionData.map((item, index) => {
                    const Icon = item.icon

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#f9fbfe] px-6 sm:px-8 py-8 sm:py-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col items-center text-center">

                                {/* Icon Container */}
                                <div className="mb-4 text-blue-600">
                                    <Icon className="w-9 h-9 sm:w-10 sm:h-10" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2 sm:mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default MissionVisionSection