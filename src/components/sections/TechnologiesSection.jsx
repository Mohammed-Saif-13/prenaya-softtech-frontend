import React from "react"

const techs = [
    { name: "PHP", icon: "/tech/php.png" },
    { name: "Laravel", icon: "/tech/laravel.png" },
    { name: "React", icon: "/tech/react.png" },
    { name: "Vue.js", icon: "/tech/vue.png" },
    { name: "Angular", icon: "/tech/angular.png" },
    { name: "Node.js", icon: "/tech/nodejs.png" },
    { name: "Python", icon: "/tech/python.png" },
    { name: "Java", icon: "/tech/java.png" },
    { name: "Flutter", icon: "/tech/flutter.png" },
    { name: "AWS", icon: "/tech/aws.png" },
    { name: "Docker", icon: "/tech/docker.png" }
]

const TechnologiesSection = () => {
    return (
        <section className="py-20 px-4 bg-[#f9fbfd] overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900">
                    Technologies We Use
                </h2>
                <p className="mt-2 text-gray-600">
                    Cutting-edge technologies and frameworks for modern solutions
                </p>
            </div>

            {/* ✅ Marquee One Line Responsive */}
            <div className="overflow-hidden w-full relative font-heading">
                <div className="marquee-track">
                    <div className="flex gap-10 sm:gap-16 min-w-max">
                        {[...techs, ...techs].map((tech, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center w-[80px] sm:w-[120px] lg:w-[140px] shrink-0"
                            >
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain mb-2"
                                />
                                <p className="text-xs sm:text-sm font-medium text-gray-800 text-center">
                                    {tech.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnologiesSection