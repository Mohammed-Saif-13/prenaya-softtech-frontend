// src/components/layout/Footer.jsx
import { Link } from "react-router-dom"
import { SiX } from "react-icons/si"
import { Linkedin, Instagram, Github, MapPin, Phone, Mail } from "lucide-react"

// --- Data configurations for the Footer ---

// Social media links
const socialLinks = [
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: SiX, label: "X (Twitter)" },
    { href: "#", icon: Instagram, label: "Instagram" },
    { href: "#", icon: Github, label: "GitHub" },
]

// Navigation links
const quickLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/services", text: "Services" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/contact", text: "Contact" },
]

// Service offerings (can be linked later if needed)
const serviceLinks = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "Cloud Solutions",
    "IoT Development",
]

// Contact details
const contactInfo = [
    {
        icon: MapPin,
        value: "Kopargaon, Maharashtra, 423603\nYeola, Maharashtra, 423401",
        isMultiLine: true,
    },
    { icon: Phone, value: "7588529311 | 9359830852" },
    { icon: Mail, value: "contact@prenayasofttech.com" },
]

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-zinc-100">
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-y-10 gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

                {/* Column 1: Company Info & Socials */}
                <div className="flex flex-col text-center md:text-left items-center md:items-start lg:col-span-1">
                    <h2 className="text-2xl font-bold text-orange-500 mb-3">Prenaya Softtech</h2>
                    <p className="text-sm text-zinc-400 max-w-sm">
                        Innovative digital solutions provider specializing in web development, mobile apps, and digital transformation services.
                    </p>
                    <div className="flex gap-3 mt-5">
                        {socialLinks.map((social) => {
                            const SocialIcon = social.icon
                            return (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition-colors"
                                >
                                    <SocialIcon size={16} />
                                </a>
                            )
                        })}
                    </div>
                </div>

                {/* Column 2 & 3: Links (Grouped for better responsive handling) */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 flex justify-center sm:justify-around gap-8 sm:gap-16">
                    {/* Quick Links */}
                    <div className="min-w-[120px] text-left">
                        <h3 className="text-lg font-semibold text-orange-500 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            {quickLinks.map((link) => (
                                <li key={link.text}>
                                    <Link to={link.href} className="hover:text-orange-400 transition-colors">{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Services */}
                    <div className="min-w-[160px] text-left">
                        <h3 className="text-lg font-semibold text-orange-500 mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            {serviceLinks.map((service) => (
                                <li key={service}>{service}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Column 4: Contact Info */}
                <div className="lg:col-span-1 text-center md:text-left">
                    <h3 className="text-lg font-semibold text-orange-500 mb-4">Contact Info</h3>
                    <ul className="space-y-3 text-sm text-zinc-400">
                        {contactInfo.map((info) => {
                            const ContactIcon = info.icon
                            return (
                                <li key={info.value} className="flex items-start gap-3 justify-center md:justify-start">
                                    <ContactIcon size={16} className="mt-1 text-orange-500 flex-shrink-0" />
                                    <span className={`text-left ${info.isMultiLine ? 'whitespace-pre-line' : ''}`}>
                                        {info.value}
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-zinc-800 text-center py-4 px-4 text-xs text-zinc-400">
                © {new Date().getFullYear()} Prenaya Softtech. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer