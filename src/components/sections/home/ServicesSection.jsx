// src/components/sections/home/ServicesSection.jsx
import { motion } from 'framer-motion'
import { Code, Smartphone, ShoppingCart, Cloud, Cpu, LineChart } from 'lucide-react'

// Services data configuration
const services = [
    {
        title: 'Web Development',
        description: 'Custom web apps with modern frontend & secure backend.',
        icon: Code,
        link: '/services/web-development'
    },
    {
        title: 'Mobile App Development',
        description: 'Native and cross-platform apps for Android and iOS.',
        icon: Smartphone,
        link: '/services/mobile-app-development'
    },
    {
        title: 'E-commerce Solutions',
        description: 'Online stores with scalable payment and product systems.',
        icon: ShoppingCart,
        link: '/services/ecommerce'
    },
    {
        title: 'Cloud Solutions',
        description: 'DevOps and scalable cloud infrastructure setup.',
        icon: Cloud,
        link: '/services/cloud-solutions'
    },
    {
        title: 'IoT Development',
        description: 'Automation and smart device integration systems.',
        icon: Cpu,
        link: '/services/iot-development'
    },
    {
        title: 'Digital Marketing',
        description: 'SEO, content, and ads to drive brand awareness.',
        icon: LineChart,
        link: '/services/digital-marketing'
    }
]

const ServicesSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#fdfbfb] via-[#ebedee] to-[#f1f2f6] py-12 sm:py-16 lg:py-20 px-4">

            {/* Section Header */}
            <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
                    Our Services
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
                    What we offer to help your business grow
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {services.map((service, index) => {
                    const Icon = service.icon

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                            className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center h-full">

                                {/* Icon Container */}
                                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>

                                {/* Service Title */}
                                <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2">
                                    {service.title}
                                </h3>

                                {/* Service Description */}
                                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                                    {service.description}
                                </p>

                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default ServicesSection