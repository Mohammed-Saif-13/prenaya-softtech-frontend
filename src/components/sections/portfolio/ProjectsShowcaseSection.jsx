// src/components/sections/portfolio/ProjectsShowcaseSection.jsx
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import imgERP from "@/assets/portfolio/ERP.webp"
import aiRecep from "@/assets/portfolio/AI-receptionist.webp"
import SiMobile from "@/assets/portfolio/SiMobile.webp"
import Medicare from "@/assets/portfolio/Medicare.webp"
import Paithani from "@/assets/portfolio/AiPaithani.webp"
import MoneyManager from "@/assets/portfolio/MoneyManager.webp"
import clinic from "@/assets/portfolio/clinic.webp"
import Jewellery from "@/assets/portfolio/Jewellery.webp"

/**
 * Metadata looked up by image. Edit here to change copy.
 */
const metaByImage = new Map([
    [imgERP, { name: "ERP", location: "Enterprise Resource", role: "Enterprise resource planning suite with inventory & billing" }],
    [aiRecep, { name: "AI Receptionist", location: "SaaS Product", role: "Voice assistant for call routing and lead capture" }],
    [SiMobile, { name: "SiMobile", location: "Mobile App", role: "Sales & inventory app with offline sync" }],
    [Medicare, { name: "MediCare", location: "Healthcare", role: "Patient records and appointment management" }],
    [Paithani, { name: "AI Paithani", location: "E‑commerce", role: "Catalog search and recommendation engine" }],
    [MoneyManager, { name: "Money Manager", location: "Finance", role: "Personal expense tracking and analytics" }],
    [clinic, { name: "Clinic", location: "Healthcare", role: "Clinic website with online booking" }],
    [Jewellery, { name: "Jewellery", location: "Retail", role: "Product showcase with customizations" }],
])

/**
 * Only image and link live here. Text is derived from metaByImage.
 */
const projects = [
    { image: imgERP, link: "#" },
    { image: aiRecep, link: "#" },
    { image: SiMobile, link: "#" },
    { image: Medicare, link: "#" },
    { image: Paithani, link: "#" },
    { image: MoneyManager, link: "#" },
    { image: clinic, link: "#" },
    { image: Jewellery, link: "#" },
]

// Fallback metadata if an image key is missing
const fallback = { name: "N/A", location: "—", role: "—" }

const ProjectsShowcaseSection = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
                {projects.map((project, i) => {
                    const meta = metaByImage.get(project.image) ?? fallback

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-md"
                        >
                            <div className="flex flex-col-reverse lg:flex-row overflow-hidden rounded-2xl sm:rounded-3xl">
                                {/* Text */}
                                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
                                    <div>
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900">{meta.name}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{meta.location}</p>
                                        <p className="text-base text-gray-700 mt-4 sm:mt-5 leading-relaxed">
                                            <span className="font-semibold text-zinc-800">Contribution</span> – {meta.role}
                                        </p>
                                    </div>

                                    <Link
                                        to={project.link}
                                        className="inline-flex items-center justify-between w-44 mt-6 sm:mt-8 px-5 py-2.5 border border-gray-300 rounded-full text-sm font-semibold text-zinc-800 group hover:bg-gray-50 transition-colors"
                                    >
                                        <span>Open Case</span>
                                        <ArrowRight className="h-5 w-5 text-gray-500 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>

                                {/* Image */}
                                <div className="bg-white lg:w-1/2 lg:bg-gray-100">
                                    <div className="relative w-full overflow-hidden h-60 sm:h-72 lg:h-full p-6 sm:p-8 lg:p-0">
                                        <img
                                            src={project.image}
                                            alt={`Showcase image for ${meta.name} project`}
                                            className="absolute inset-0 w-full h-full object-contain object-center lg:object-cover"
                                            loading={i === 0 ? "eager" : "lazy"}
                                            // --- YAHAN CHANGE KIYA HAI BRO ---
                                            fetchPriority={i === 0 ? "high" : "auto"}
                                            decoding="async"
                                            sizes="(min-width:1024px) 50vw, 100vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}

export default ProjectsShowcaseSection