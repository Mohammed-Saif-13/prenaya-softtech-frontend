import React, { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";
import { Briefcase, Smile, Headphones, Calendar } from "lucide-react";

// Stats data
const stats = [
    { value: 6, suffix: "+", text: "Months Experience", icon: <Calendar /> },
    { value: 40, suffix: "+", text: "Projects Completed", icon: <Briefcase /> },
    { value: 100, suffix: "%", text: "Client Satisfaction", icon: <Smile /> },
    { value: 24, suffix: "/7", text: "Support Available", icon: <Headphones /> },
];

function AnimatedCounter({ from = 0, to, suffix }) {
    const nodeRef = useRef();
    const inView = useInView(nodeRef, { once: true });

    useEffect(() => {
        if (inView) {
            const node = nodeRef.current;
            const controls = animate(from, to, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    node.textContent = Math.round(value);
                },
            });
            return () => controls.stop();
        }
    }, [inView, from, to]);

    return (
        <span className="flex">
            <span ref={nodeRef}>{from}</span>
            <span>{suffix}</span>
        </span>
    );
}

const StatsMarqueeSection = () => {
    // Repeat stats for infinite scroll feel
    const repeatedStats = [...stats, ...stats];

    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="relative overflow-x-hidden w-full">
                <div className="marquee-track gap-8 px-6 py-4">
                    {[...repeatedStats].map((stat, index) => (
                        <div
                            key={index}
                            className="flex items-center shrink-0 min-w-[250px] max-w-xs bg-[#f9fbfe] px-6 py-6 rounded-xl shadow-md gap-4"
                        >
                            <div className="text-primary">
                                {React.cloneElement(stat.icon, { className: "w-10 h-10" })}
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-zinc-900 leading-tight">
                                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-sm text-neutral-500">{stat.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* optional fade side */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" />
            </div>
        </section>
    );
};

export default StatsMarqueeSection;