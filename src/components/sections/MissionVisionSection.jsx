// src/components/sections/MissionVisionSection.jsx

import React from "react"
import { Target, Eye } from "lucide-react"
import { motion } from "framer-motion"

const data = [
    {
        title: "Our Mission",
        icon: <Target className="w-10 h-10 text-blue-600" />,
        description:
            "To empower businesses with cutting-edge digital solutions that drive growth, enhance efficiency, and create exceptional user experiences.",
    },
    {
        title: "Our Vision",
        icon: <Eye className="w-10 h-10 text-blue-600" />,
        description:
            "To be the leading provider of digital transformation services, recognized globally for technical excellence, innovative solutions, and client-centric focus.",
    },
]

const MissionVisionSection = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.map((block, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-[#f9fbfe] px-8 py-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-4">{block.icon}</div>
                            <h3 className="text-xl font-semibold text-zinc-900">
                                {block.title}
                            </h3>
                            <p className="mt-3 text-neutral-500 text-sm">{block.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default MissionVisionSection