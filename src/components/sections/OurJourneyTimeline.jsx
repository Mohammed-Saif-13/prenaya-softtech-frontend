// src/components/sections/OurJourneyTimeline.jsx

import React from "react"

// Dummy milestones
const timelineData = [
    {
        date: "March 2025",
        content: "Company founded with a mission to digitize businesses.",
    },
    {
        date: "May 2025",
        content: "Launched our first product with 100% client satisfaction.",
    },
    {
        date: "July 2025",
        content: "Expanded to international markets with new partnerships.",
    },
    {
        date: "Oct 2025",
        content: "Team grew to 20+ professionals, released 15+ projects.",
    },
]

const OurJourneyTimeline = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto mb-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Our Journey</h2>
                <p className="mt-2 text-neutral-500 text-sm sm:text-base">
                    Key milestones in our company’s growth and development
                </p>
            </div>

            <div className="relative border-l-2 border-blue-500 pl-6 ml-3 max-w-4xl mx-auto">
                {timelineData.map((item, index) => (
                    <div key={index} className="mb-12 relative">
                        {/* Dot */}
                        <div className="w-4 h-4 bg-white border-4 border-blue-500 rounded-full absolute -left-8 top-2 z-10"></div>

                        <div className="bg-[#f9fbfe] p-6 rounded-xl shadow-sm">
                            <p className="text-blue-600 text-sm font-semibold mb-2">{item.date}</p>
                            <p className="text-sm text-neutral-600">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurJourneyTimeline