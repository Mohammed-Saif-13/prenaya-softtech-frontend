// src/components/sections/TeamSection.jsx

import React from "react"
import { Github, Linkedin } from 'lucide-react'

const teamData = [
    {
        name: "Altamash Shaikh",
        role: "Co-Founder & CEO - Technologies And Business Strategy",
        bio: "Dynamic leader with a strong foundation in technology and business strategy. BTech in Computer Science with 3+ years of experience in full-stack development, product innovation, and business growth initiatives.",
        education: "BTech in Computer Science and Engineering",
        experience: "3+ years in Technology and Business Strategy",
        expertise: "Full-Stack Development, Product Strategy, Technology Innovation, Business Growth",
        socials: {
            linkedin: "#",
            github: "#"
        },
        initial: "A"
    },
    {
        name: "Yashvardhan Shinde",
        role: "Co-Founder & CEO - Technologies And Production",
        bio: "Dynamic leader with a strong foundation in technology and business strategy. BTech in Computer Science with 3+ years of experience in full-stack development, product innovation, and business growth initiatives.",
        education: "BTech in Computer Science and Engineering",
        experience: "3+ years in Technology and Business Strategy",
        expertise: "Full-Stack Development, Product Strategy, Technology Innovation, Business Growth",
        socials: {
            linkedin: "#",
            github: "#"
        },
        initial: "Y"
    }
]

const TeamCard = ({ member }) => {
    return (
        <div className="bg-[#f9fbfe] p-6 rounded-2xl shadow-sm flex flex-col items-center text-center h-full">
            {/* Avatar Circle */}
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg mb-4">
                {member.initial}
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">{member.name}</h3>
            <p className="text-blue-600 text-sm font-medium">{member.role}</p>

            <p className="mt-3 text-sm text-neutral-600">{member.bio}</p>

            <div className="w-full mt-4 text-sm text-left">
                <p><span className="font-semibold">Education:</span> {member.education}</p>
                <p className="mt-1"><span className="font-semibold">Experience:</span> {member.experience}</p>
                <p className="mt-1"><span className="font-semibold">Expertise:</span> {member.expertise}</p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
                <a href={member.socials.linkedin} target="_blank" className="hover:text-blue-600">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href={member.socials.github} target="_blank" className="hover:text-blue-600">
                    <Github className="w-5 h-5" />
                </a>
            </div>
        </div>
    )
}

const TeamSection = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Meet Our Team</h2>
                <p className="mt-2 text-neutral-500 text-sm sm:text-base">
                    The talented individuals behind our success
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {teamData.map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))}
            </div>
        </section>
    )
}

export default TeamSection