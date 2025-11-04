// src/components/sections/WhyChooseUsSection.jsx

import React from "react"
import { Rocket, Shield, Headphones, LineChart, Users, DollarSign } from "lucide-react"

const features = [
    {
        title: "Rapid Development",
        description: "Faster time-to-market with high quality results.",
        icon: <Rocket className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "Security First",
        description: "Industry-leading practices ensure top-notch security.",
        icon: <Shield className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock assistance to keep your business running.",
        icon: <Headphones className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "Scalable Solutions",
        description: "Our systems grow with your business.",
        icon: <LineChart className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "Expert Team",
        description: "Skilled professionals with latest tech expertise.",
        icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "Cost Effective",
        description: "Transparent pricing and high ROI delivery.",
        icon: <DollarSign className="w-8 h-8 text-blue-600" />,
    },
]

const WhyChooseUsSection = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Why Choose Us?</h2>
                <p className="mt-2 text-neutral-500">
                    We bring unique advantages that set us apart in the digital solutions space
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((item, i) => (
                    <div key={i} className="bg-[#f9fbfe] p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-col items-start text-left">
                            <div className="mb-4">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-zinc-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-neutral-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyChooseUsSection