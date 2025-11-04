import React from "react"
import { Button } from "@/components/ui/button" // Assuming you're using shadcn/ui buttons
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const StartProjectSection = () => {
    return (
        <section className="bg-[#f9fbfd] py-20 px-4 text-center">
            <div className="max-w-xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900">
                    Ready to Start Your Project?
                </h2>
                <p className="mt-2 text-gray-600 text-sm sm:text-base">
                    Let's discuss your requirements and create a solution that exceeds your expectations.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 font-heading">
                    <Link to="/contact">
                        <Button size="lg" className="text-white">
                            Get Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <Link to="/portfolio">
                        <Button size="lg"  variant="outline">
                            View Our Work
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default StartProjectSection