// src/components/sections/ServicesSection.jsx

import React from 'react'
import { motion } from 'framer-motion'
import {
    Code,
    Smartphone,
    ShoppingCart,
    Cloud,
    Cpu,
    LineChart
} from 'lucide-react'

const services = [
    {
        title: 'Web Development',
        description: 'Custom web apps with modern frontend & secure backend.',
        icon: <Code className="w-6 h-6 text-white" />,
        link: '/services/web-development'
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform apps for Android and iOS.',
        icon: <Smartphone className="w-6 h-6 text-white" />,
        link: '/services/mobile-app-development'
    },
    {
        title: 'E-commerce Solutions',
        description: 'Online stores with scalable payment and product systems.',
        icon: <ShoppingCart className="w-6 h-6 text-white" />,
        link: '/services/ecommerce'
    },
    {
        title: 'Cloud Solutions',
        description: 'DevOps and scalable cloud infrastructure setup.',
        icon: <Cloud className="w-6 h-6 text-white" />,
        link: '/services/cloud-solutions'
    },
    {
        title: 'IoT Development',
        description: 'Automation and smart device integration systems.',
        icon: <Cpu className="w-6 h-6 text-white" />,
        link: '/services/iot-development'
    },
    {
        title: 'Digital Marketing',
        description: 'SEO, content, and ads to drive brand awareness.',
        icon: <LineChart className="w-6 h-6 text-white" />,
        link: '/services/digital-marketing'
    }
]

const ServicesSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#fdfbfb] via-[#ebedee] to-[#f1f2f6] py-20 px-4">
            <div className="max-w-6xl mx-auto text-center mb-16 px-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">
                    Our Services
                </h2>
                <p className="mt-2 text-neutral-600 sm:text-base text-sm">
                    What we offer to help your business grow
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex flex-col items-center text-center h-full">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center mb-4 shadow-lg">
                                {service.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-zinc-900 mb-2">
                                {service.title}
                            </h3>

                            <p className="text-sm text-neutral-600 mb-4">
                                {service.description}
                            </p>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default ServicesSection