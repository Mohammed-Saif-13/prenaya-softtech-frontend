// src/components/sections/services/TechnologiesSection.jsx

const techs = [
    { name: "PHP", icon: "/tech/php.webp" },
    { name: "Laravel", icon: "/tech/laravel.webp" },
    { name: "React", icon: "/tech/react.webp" },
    { name: "Vue.js", icon: "/tech/vue.webp" },
    { name: "Angular", icon: "/tech/angular.webp" },
    { name: "Node.js", icon: "/tech/nodejs.webp" },
    { name: "Python", icon: "/tech/python.webp" },
    { name: "Java", icon: "/tech/java.webp" },
    { name: "Flutter", icon: "/tech/flutter.webp" },
    { name: "AWS", icon: "/tech/aws.webp" },
    { name: "Docker", icon: "/tech/docker.webp" },
];

const TechnologiesSection = () => {
    return (
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-[#f9fbfd] overflow-hidden">
            <div className="text-center mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
                    Technologies We Use
                </h2>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                    Cutting-edge technologies and frameworks for modern solutions
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full overflow-hidden">
                <div className="marquee-track flex gap-10 sm:gap-16">
                    {/* Items ko 2 baar render kiya for the loop */}
                    {[...techs, ...techs].map((tech, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center w-[80px] sm:w-[120px] lg:w-[140px] shrink-0"
                        >
                            <img
                                src={tech.icon}
                                alt={tech.name}
                                loading="lazy"
                                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain mb-2"
                            />
                            <p className="text-xs sm:text-sm font-medium text-gray-800 text-center">
                                {tech.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnologiesSection;