// src/components/layout/Footer.jsx - UPDATED WITH X LOGO

import React from "react"
import { Link } from "react-router-dom"

// 1. IMPORT NA_YA 'X' LOGO from react-icons
import { SiX } from "react-icons/si";

// 2. LUCIDE-REACT SE 'Twitter' HATA DIYA
import {
    Facebook,
    Linkedin,
    Instagram,
    MapPin,
    Phone,
    Mail,
} from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-zinc-100">
            <div className="container mx-auto px-6 py-16 grid gap-y-12 gap-x-8 md:grid-cols-4">

                {/* Column 1: Company Info */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold text-orange-500 mb-3">Prenaya Softtech</h2>
                    <p className="text-sm text-zinc-400 max-w-sm">
                        Innovative digital solutions provider specializing in web development, mobile apps, and digital transformation services.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4 justify-center md:justify-start">
                        <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80">
                            <Facebook size={16} />
                        </a>

                        {/* 3. TWITTER ICON KO 'SiX' SE BADAL DIYA */}
                        <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80">
                            <SiX size={16} />
                        </a>

                        <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80">
                            <Linkedin size={16} />
                        </a>
                        <a href="#" className="bg-primary text-white p-2 rounded-full hover:bg-primary/80">
                            <Instagram size={16} />
                        </a>
                    </div>
                </div>

                {/* Column 2+3: Quick Links + Services */}
                <div className="col-span-2 flex flex-row flex-wrap justify-center gap-8 sm:gap-16 text-left">
                    {/* Quick Links */}
                    <div className="min-w-[120px]">
                        <h3 className="text-xl font-semibold text-orange-500 mb-3">Quick Links</h3>
                        <ul className="space-y-1 text-sm text-zinc-400">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    {/* Services */}
                    <div className="min-w-[160px]">
                        <h3 className="text-xl font-semibold text-orange-500 mb-3">Services</h3>
                        <ul className="space-y-1 text-sm text-zinc-400">
                            <li>Web Development</li>
                            <li>Mobile App Development</li>
                            <li>E-commerce Solutions</li>
                            <li>Cloud Solutions</li>
                            <li>IoT Development</li>
                        </ul>
                    </div>
                </div>

                {/* Column 4: Contact Info */}
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                    <h3 className="text-xl font-semibold text-orange-500 mb-3">Contact Info</h3>
                    <ul className="space-y-2 text-sm text-zinc-400">
                        <li className="flex items-start gap-2 justify-center md:justify-start text-left">
                            <MapPin size={16} className="mt-1 text-orange-500" />
                            <span>
                                Kopargaon, near Sanjivani University, Maharashtra, 423603<br />
                                Yeola, Amardham Rd, Maharashtra, 423401
                            </span>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <Phone size={16} className="text-orange-500" />
                            <span>7588529311 || 9359830852</span>
                        </li>
                        <li className="flex items-center gap-2 justify-center md:justify-start">
                            <Mail size={16} className="text-orange-500" />
                            <span>contact@prenayasofttech.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-zinc-800 text-center py-4 text-xs text-zinc-400">
                © {new Date().getFullYear()} Prenaya Softtech. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer