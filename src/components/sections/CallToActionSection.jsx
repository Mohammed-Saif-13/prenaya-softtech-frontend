// src/components/sections/CallToActionSection.jsx
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const CallToActionSection = () => {
    return (
        <section className="bg-[#f9fbfe] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 text-center">
            <div className="max-w-3xl mx-auto">

                {/* CTA Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 mb-3 sm:mb-4">
                    Ready to Work With Us?
                </h2>

                {/* CTA Description */}
                <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
                    Let's discuss your project and see how we can help you achieve your goals.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 font-heading">
                    <Link to="/contact" className="w-full sm:w-auto">
                        <Button size="lg" className="w-full sm:w-auto min-w-[160px]">
                            Get Started
                        </Button>
                    </Link>

                    <Link to="/portfolio" className="w-full sm:w-auto">
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto min-w-[160px]"
                        >
                            View Our Work
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CallToActionSection