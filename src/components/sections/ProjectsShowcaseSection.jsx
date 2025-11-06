// src/components/sections/ProjectsShowcaseSection.jsx
import React from "react"
import { ArrowRight } from "lucide-react"

const projects = [
    {
        name: "N/A",
        location: "Bhiwandi",
        role: "Elevated site visibility through strategic SEO",
        image: "/portfolio/",
        link: "#"
    },
    {
        name: "N/A",
        location: "Catalog Website",
        role: "Complete UI/UX redesign with fresh layout",
        image: "/portfolio/",
        link: "#"
    },
    {
        name: "N/A",
        location: "Restaurant Brand",
        role: "Elegant branding-focused site with storytelling flow",
        image: "/portfolio/",
        link: "#"
    }
]

const ProjectsShowcaseSection = () => {
    return (
        <section className="py-20 px-4 sm:px-6 bg-white">
            <div className="max-w-5xl mx-auto space-y-10">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="bg-[#f9fbfe] rounded-3xl border border-gray-100 shadow-md"
                    >
                        {/* --- YAHAN CHANGE KIYA HAI --- */}
                        {/* 'flex-col' ko 'flex-col-reverse' kar diya */}
                        <div className="flex flex-col-reverse lg:flex-row overflow-hidden rounded-3xl">

                            {/* Left Side (Text) */}
                            <div className="flex flex-1 flex-col justify-between p-8 lg:p-10">
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-zinc-900 font-heading">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-500 mt-1">{project.location}</p>
                                    <p className="text-base text-gray-600 mt-4">
                                        Contribution – {project.role}
                                    </p>
                                </div>

                                <a href={project.link}
                                    className="flex items-center justify-between w-40 mt-6 px-5 py-2.5 border border-gray-200 rounded-full text-sm font-semibold text-zinc-800 group hover:bg-gray-50 transition-all">
                                    <span>Open Case</span>

                                    <ArrowRight className="h-5 w-5 text-gray-500 group-hover:translate-x-0.5 transition-transform" />
                                </a>
                            </div>

                            {/* Right Side (Image) */}
                            <div className="lg:w-1/2">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsShowcaseSection