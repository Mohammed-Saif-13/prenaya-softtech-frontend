// src/components/sections/services/DevelopmentProcessSection.jsx
import { motion } from "framer-motion"
import {
    Lightbulb,
    ClipboardCheck,
    Code2,
    Bug,
    UploadCloud,
    LifeBuoy
} from "lucide-react"

// Development process steps data
const steps = [
    {
        title: "Discovery",
        description: "We analyze your requirements, understand your business goals, and define the project scope.",
        icon: Lightbulb
    },
    {
        title: "Planning",
        description: "We strategically craft timelines, define sprints, and allocate resources effectively.",
        icon: ClipboardCheck
    },
    {
        title: "Development",
        description: "Our devs build clean, scalable code using modern technologies tailored to your solution.",
        icon: Code2
    },
    {
        title: "Testing",
        description: "We run QA test cases to eliminate bugs and ensure reliability across devices.",
        icon: Bug
    },
    {
        title: "Deployment",
        description: "We launch your project with proper CI/CD and infrastructure setup.",
        icon: UploadCloud
    },
    {
        title: "Support",
        description: "We provide post-launch updates, monitoring & long-term support.",
        icon: LifeBuoy
    }
]

const DevelopmentProcessSection = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-[#f9fbfd]">

            {/* Section Header */}
            <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
                    Our Development Process
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                    A proven methodology that ensures successful project delivery
                </p>
            </div>

            {/* Process Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {steps.map((step, index) => {
                    const Icon = step.icon

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6 text-left flex flex-col hover:shadow-md transition-shadow"
                        >
                            {/* Icon Container */}
                            <div className="mb-3 sm:mb-4 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white">
                                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>

                            {/* Step Title */}
                            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2">
                                {step.title}
                            </h3>

                            {/* Step Description */}
                            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed flex-grow">
                                {step.description}
                            </p>

                            {/* Step Number Badge */}
                            <div className="mt-auto text-xs sm:text-sm text-blue-600 font-semibold border-t pt-3 border-dashed border-gray-300">
                                Step {index + 1}
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default DevelopmentProcessSection