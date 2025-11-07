// src/components/sections/services/ServicesListSection.jsx
import {
    Code2,
    Smartphone,
    ShoppingCart,
    Cloud,
    Cpu,
    LineChart,
    CheckCircle
} from "lucide-react"

// Services data configuration
const services = [
    {
        title: "Web Development",
        icon: Code2,
        description: "Custom web applications with modern tech stack",
        features: [
            "Responsive Design",
            "Cross-browser Compatibility",
            "SEO Optimization",
            "Performance Optimization",
            "Secure Coding"
        ]
    },
    {
        title: "Mobile App Development",
        icon: Smartphone,
        description: "Native and cross-platform mobile apps",
        features: [
            "iOS Development",
            "Android Development",
            "React Native",
            "Flutter",
            "App Store Optimization"
        ]
    },
    {
        title: "E-commerce Solutions",
        icon: ShoppingCart,
        description: "Complete online store solutions",
        features: [
            "Payment Gateway Integration",
            "Inventory Management",
            "Order Processing",
            "Admin Dashboard",
            "Analytics"
        ]
    },
    {
        title: "Cloud Solutions",
        icon: Cloud,
        description: "Scalable cloud infrastructure solutions",
        features: [
            "AWS Services",
            "Azure Solutions",
            "Google Cloud",
            "Server Migration",
            "Monitoring & Backup"
        ]
    },
    {
        title: "IoT Development",
        icon: Cpu,
        description: "IoT solutions for smart automation",
        features: [
            "Sensor Integration",
            "Data Analytics",
            "Real-time Monitoring",
            "Device Management",
            "API Development"
        ]
    },
    {
        title: "Digital Marketing",
        icon: LineChart,
        description: "Boost your online presence",
        features: [
            "SEO Services",
            "Social Media Marketing",
            "Content Marketing",
            "PPC Advertising",
            "Analytics & Reporting"
        ]
    }
]

const ServicesListSection = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {services.map((service, index) => {
                    const Icon = service.icon

                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-5 sm:p-6 flex flex-col items-start text-left hover:shadow-lg transition-shadow border border-gray-200"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center mb-3 sm:mb-4 shadow-lg text-white">
                                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-1 sm:mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm sm:text-base text-zinc-600 mb-4">{service.description}</p>

                            {/* Features List */}
                            <div className="mb-4">
                                <p className="font-medium text-zinc-900 mb-2 text-sm sm:text-base">What We Offer:</p>
                                <ul className="space-y-1 sm:space-y-1.5">
                                    {service.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="text-xs sm:text-sm flex items-center text-gray-700">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ServicesListSection