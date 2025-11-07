// src/components/sections/home/StatsMarqueeSection.jsx
import { useEffect, useRef } from "react"
import { useInView, animate } from "framer-motion"
import { Briefcase, Smile, Headphones, Calendar } from "lucide-react"

// Statistics data configuration
const stats = [
    { value: 6, suffix: "+", text: "Months Experience", icon: Calendar },
    { value: 40, suffix: "+", text: "Projects Completed", icon: Briefcase },
    { value: 100, suffix: "%", text: "Client Satisfaction", icon: Smile },
    { value: 24, suffix: "/7", text: "Support Available", icon: Headphones },
]

/**
 * Animated counter component with viewport detection
 * Animates number from 'from' to 'to' when element comes into view
 */
function AnimatedCounter({ from = 0, to, suffix }) {
    const nodeRef = useRef()
    const inView = useInView(nodeRef, { once: true })

    useEffect(() => {
        if (!inView) return

        const node = nodeRef.current

        // Animate counter with Framer Motion
        const controls = animate(from, to, {
            duration: 2,
            ease: "easeOut",
            onUpdate(value) {
                node.textContent = Math.round(value)
            },
        })

        // Cleanup animation on unmount
        return () => controls.stop()
    }, [inView, from, to])

    return (
        <span className="flex">
            <span ref={nodeRef}>{from}</span>
            <span>{suffix}</span>
        </span>
    )
}

const StatsMarqueeSection = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
            <div className="relative overflow-x-hidden w-full">

                {/* Infinite scrolling marquee track */}
                <div className="marquee-track gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 py-4">
                    {/* Duplicate stats array for seamless infinite scroll */}
                    {[...stats, ...stats].map((stat, index) => {
                        const Icon = stat.icon

                        return (
                            <div
                                key={index}
                                className="flex items-center shrink-0 min-w-[200px] sm:min-w-[240px] md:min-w-[260px] max-w-xs bg-[#f9fbfe] px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 rounded-xl shadow-md hover:shadow-lg transition-shadow gap-3 sm:gap-4"
                            >
                                {/* Icon container */}
                                <div className="text-primary flex-shrink-0">
                                    <Icon className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                                </div>

                                {/* Stat content */}
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 leading-tight">
                                        <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                                    </h3>
                                    <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
                                        {stat.text}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Gradient fade overlay on edges */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" />
            </div>
        </section>
    )
}

export default StatsMarqueeSection