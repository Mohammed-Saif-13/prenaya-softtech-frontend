// src/components/sections/about/TeamSection.jsx
import { motion } from "framer-motion"
import { Github, Linkedin } from 'lucide-react'

// Team members data
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
        bio: "An expert in transforming technical strategy into high-quality products. A passion for steering the production pipeline, from initial code to final deployment, guarantees every project is delivered with precision and excellence.",
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

const TeamCard = ({ member, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-[#f9fbfe] p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center h-full"
        >
            {/* Avatar Circle */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">
                {member.initial}
            </div>

            {/* Name & Role */}
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900">
                {member.name}
            </h3>
            <p className="text-blue-600 text-xs sm:text-sm font-medium mt-1">
                {member.role}
            </p>

            {/* Bio */}
            <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {member.bio}
            </p>

            {/* Details Section */}
            <div className="w-full mt-4 text-xs sm:text-sm text-left space-y-1">
                <p>
                    <span className="font-semibold text-zinc-900">Education:</span>{' '}
                    <span className="text-neutral-600">{member.education}</span>
                </p>
                <p>
                    <span className="font-semibold text-zinc-900">Experience:</span>{' '}
                    <span className="text-neutral-600">{member.experience}</span>
                </p>
                <p>
                    <span className="font-semibold text-zinc-900">Expertise:</span>{' '}
                    <span className="text-neutral-600">{member.expertise}</span>
                </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-5 sm:mt-6">
                <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn`}
                    className="text-zinc-600 hover:text-blue-600 hover:scale-110 transition-all"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
                <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s GitHub`}
                    className="text-zinc-600 hover:text-blue-600 hover:scale-110 transition-all"
                >
                    <Github className="w-5 h-5" />
                </a>
            </div>
        </motion.div>
    )
}

const TeamSection = () => {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">

            {/* Section Header */}
            <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12 lg:mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
                    Meet Our Team
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto">
                    The talented individuals behind our success
                </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {teamData.map((member, index) => (
                    <TeamCard key={index} member={member} index={index} />
                ))}
            </div>
        </section>
    )
}

export default TeamSection