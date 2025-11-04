import React from "react"
import {
    Code2,
    Smartphone,
    ShoppingCart,
    Cloud,
    Cpu,
    LineChart,
    CheckCircle
} from "lucide-react"

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
        <section className="py-20 px-6 bg-[#f6f9fc]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start justify-between text-left hover:shadow-lg transition-all border border-gray-200"
                    >
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center mb-4 shadow-lg text-white">
                            <service.icon className="h-6 w-6" />
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-xl font-semibold text-zinc-900 mb-1 font-heading">
                            {service.title}
                        </h3>
                        <p className="text-sm text-zinc-600 mb-4">{service.description}</p>

                        {/* Features List */}
                        <div className="mb-4">
                            <p className="font-medium text-zinc-900 mb-2">What We Offer:</p>
                            <ul className="space-y-1">
                                {service.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="text-sm flex items-center text-gray-700">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ServicesListSection