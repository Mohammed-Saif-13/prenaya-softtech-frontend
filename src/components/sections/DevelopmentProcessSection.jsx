import React from "react"
import { motion } from "framer-motion"
import {
    Lightbulb,
    ClipboardCheck,
    Code2,
    Bug,
    UploadCloud,
    LifeBuoy
} from "lucide-react"

const steps = [
    {
        title: "Discovery",
        description:
            "We analyze your requirements, understand your business goals, and define the project scope.",
        icon: Lightbulb
    },
    {
        title: "Planning",
        description:
            "We strategically craft timelines, define sprints, and allocate resources effectively.",
        icon: ClipboardCheck
    },
    {
        title: "Development",
        description:
            "Our devs build clean, scalable code using modern technologies tailored to your solution.",
        icon: Code2
    },
    {
        title: "Testing",
        description:
            "We run QA test cases to eliminate bugs and ensure reliability across devices.",
        icon: Bug
    },
    {
        title: "Deployment",
        description:
            "We launch your project with proper CI/CD and infrastructure setup.",
        icon: UploadCloud
    },
    {
        title: "Support",
        description:
            "We provide post-launch updates, monitoring & long-term support.",
        icon: LifeBuoy
    }
]

const DevelopmentProcessSection = () => {
    return (
        <section className="py-20 px-4 bg-[#f9fbfd]">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900">
                    Our Development Process
                </h2>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-base">
                    A proven methodology that ensures successful project delivery
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {steps.map((step, index) => {
                    const Icon = step.icon
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-left flex flex-col justify-between hover:shadow-md transition-all"
                        >
                            {/* Icon Box */}
                            <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-purple-500 text-white">
                                <Icon className="w-5 h-5" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-zinc-900 font-heading mb-2">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 mb-4">
                                {step.description}
                            </p>

                            {/* Step number */}
                            <div className="mt-auto text-xs text-blue-600 font-semibold border-t pt-3 border-dashed border-gray-300">
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