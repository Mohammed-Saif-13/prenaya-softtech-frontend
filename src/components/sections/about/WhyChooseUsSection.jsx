// src/components/sections/about/WhyChooseUsSection.jsx
import { motion } from "framer-motion"
import { Rocket, Shield, Headphones, LineChart, Users, DollarSign } from "lucide-react"

// Features data configuration
const features = [
    {
        title: "Rapid Development",
        description: "Faster time-to-market with high quality results.",
        icon: Rocket,
    },
    {
        title: "Security First",
        description: "Industry-leading practices ensure top-notch security.",
        icon: Shield,
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock assistance to keep your business running.",
        icon: Headphones,
    },
    {
        title: "Scalable Solutions",
        description: "Our systems grow with your business.",
        icon: LineChart,
    },
    {
        title: "Expert Team",
        description: "Skilled professionals with latest tech expertise.",
        icon: Users,
    },
    {
        title: "Cost Effective",
        description: "Transparent pricing and high ROI delivery.",
        icon: DollarSign,
    },
]

const WhyChooseUsSection = () => {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

            {/* Section Header */}
            <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
                    Why Choose Us?
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
                    We bring unique advantages that set us apart in the digital solutions space
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
                {features.map((item, index) => {
                    const Icon = item.icon

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-[#f9fbfe] p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all group"
                        >
                            <div className="flex flex-col items-start text-left">

                                {/* Icon Container */}
                                <div className="mb-3 sm:mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                                </div>

                                {/* Title */}
                                <h4 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-1 sm:mb-2">
                                    {item.title}
                                </h4>

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

export default WhyChooseUsSection