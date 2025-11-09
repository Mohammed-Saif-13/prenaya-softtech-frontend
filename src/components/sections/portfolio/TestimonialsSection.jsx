// src/components/sections/portfolio/TestimonialsSection.jsx
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cards"

// Testimonials data (remains the same)
const testimonials = [
    {
        text: "Working with Prenaya Softtech was a game-changer. They took our initial idea and turned it into a fully functional platform faster than we expected. Their team's technical skill and dedication are truly top-notch.",
        name: "Ankit Sharma",
        position: "Founder, InnovateCo",
    },
    {
        text: "As a developer, I was impressed by the code quality. It was clean, scalable, and well-documented, making the handover process incredibly smooth. It's rare to find a team that cares so much about the details.",
        name: "Priya Singh",
        position: "Lead Engineer, TechSolutions",
    },
    {
        text: "They brought our Figma designs to life with pixel-perfect accuracy. The micro-interactions and animations they added really elevated the user experience. A designer's dream partner!",
        name: "Sameer Verma",
        position: "Product Designer, Creative Minds",
    },
    {
        text: "Since launching the new website, our user engagement is up by 40%. The site is not only beautiful but also incredibly fast and SEO-friendly. Our marketing campaigns are finally getting the results they deserve.",
        name: "Ali Khan",
        position: "Marketing Head, Growthly",
    },
    {
        text: "This is our third project with Prenaya, and they consistently exceed our expectations. They're more than just a vendor; they're a true technology partner we can always count on.",
        name: "Sunita Gupta",
        position: "COO, BuildRight Inc.",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 overflow-hidden">

            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10 sm:mb-12"
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
                    What Our Clients Say
                </h2>
            </motion.div>

            {/* Slider Container */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative flex items-center justify-center"
            >
                <Swiper
                    effect="cards"
                    grabCursor={true}
                    // --- YAHAN FIX KIYA HAI BRO ---
                    // loop ko false karne se warning chali jaayegi
                    loop={false}
                    className="testimonial-swiper-card w-[270px] h-[340px] sm:w-[320px] sm:h-[340px]"
                    modules={[EffectCards]}
                    cardsEffect={{
                        perSlideOffset: 8,
                        perSlideRotate: 2,
                        slideShadows: false, // Shadows CSS se handle honge
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index} className="rounded-2xl">
                            <div className="h-full w-full p-5 sm:p-6 bg-white border border-gray-200 rounded-2xl flex flex-col justify-between">

                                {/* Your Original Icon */}
                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-3 sm:mb-4 text-gray-500">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.5} // Thoda patla kiya
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5.121 17.804A9.953 9.953 0 0112 15c1.956 0 3.772.588 5.28 1.59M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>

                                {/* Testimonial Text */}
                                <p className="text-sm text-zinc-700 mb-4 leading-relaxed flex-grow">
                                    "{item.text}"
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between border-t border-gray-200 pt-3 mt-auto">
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-900">
                                            {item.name}
                                        </h4>
                                        <p className="text-xs text-gray-500">{item.position}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </section>
    )
}

export default TestimonialsSection