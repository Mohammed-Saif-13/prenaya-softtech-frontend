// src/components/sections/CallToActionSection.jsx

import React from "react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const CallToActionSection = () => {
    const navigate = useNavigate()

    return (
        <section className="bg-[#f9fbfe] py-20 px-4 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                    Ready to Work With Us?
                </h2>
                <p className="text-neutral-600 mb-8">
                    Let's discuss your project and see how we can help you achieve your goals.
                </p>

                <div className="font-heading flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg">
                        Get Started
                    </Button>

                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => navigate("/portfolio")}
                    >
                        View Our Work
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default CallToActionSection