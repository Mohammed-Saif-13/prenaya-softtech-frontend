// src/components/sections/StartProjectSection.jsx
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const StartProjectSection = () => {
    return (
        <section className="bg-[#f9fbfd] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center">
            <div className="max-w-xl mx-auto">

                {/* Section Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
                    Ready to Start Your Project?
                </h2>

                {/* Section Description */}
                <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                    Let's discuss your requirements and create a solution that exceeds your expectations.
                </p>

                {/* CTA Buttons */}
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">

                    {/* Updated link for "Get Free Consultation" button */}
                    <Link to="/contact#contact-form" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full group">
                            Get Free Consultation
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>

                    <Link to="/portfolio" className="w-full sm:w-auto">
                        <Button size="lg" variant="outline" className="w-full">
                            View Our Work
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default StartProjectSection