// src/components/sections/portfolio/ProjectsShowcaseSection.jsx
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// NOTE: Replace with your actual project data
const projects = [
    {
        name: "N/A",
        location: "Bhiwandi",
        role: "Elevated site visibility through strategic SEO",
        image: "/portfolio/placeholder-1.jpg", // Placeholder image path
        link: "#"
    },
    {
        name: "N/A",
        location: "Catalog Website",
        role: "Complete UI/UX redesign with fresh layout",
        image: "/portfolio/placeholder-2.jpg", // Placeholder image path
        link: "#"
    },
    {
        name: "N/A",
        location: "Restaurant Brand",
        role: "Elegant branding-focused site with storytelling flow",
        image: "/portfolio/placeholder-3.jpg", // Placeholder image path
        link: "#"
    }
]

const ProjectsShowcaseSection = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-md hover:shadow-xl transition-shadow"
                    >
                        {/* Main flex container for layout */}
                        <div className="flex flex-col-reverse lg:flex-row overflow-hidden rounded-2xl sm:rounded-3xl">

                            {/* Left Side: Text Content */}
                            <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 lg:p-10">
                                <div>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-900">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{project.location}</p>
                                    <p className="text-base text-gray-700 mt-4 sm:mt-5 leading-relaxed">
                                        <span className="font-semibold text-zinc-800">Contribution</span> – {project.role}
                                    </p>
                                </div>

                                {/* Case Study Link */}
                                <Link
                                    to={project.link}
                                    className="inline-flex items-center justify-between w-44 mt-6 sm:mt-8 px-5 py-2.5 border border-gray-300 rounded-full text-sm font-semibold text-zinc-800 group hover:bg-gray-50 transition-colors"
                                >
                                    <span>Open Case</span>
                                    <ArrowRight className="h-5 w-5 text-gray-500 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            {/* Right Side: Image */}
                            <div className="lg:w-1/2 bg-gray-100">
                                <img
                                    src={project.image}
                                    alt={`Showcase image for ${project.name} project`}
                                    className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsShowcaseSection