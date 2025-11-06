"use client";

import { motion } from "framer-motion";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    Autoplay,
    EffectCards,
    Navigation,
    Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
    {
        text:
            "Working with Prenaya Softtech was a game-changer. They took our initial idea and turned it into a fully functional platform faster than we expected. Their team's technical skill and dedication are truly top-notch.",
        name: "Ankit Sharma",
        position: "Founder, InnovateCo",
    },
    {
        text:
            "As a developer, I was impressed by the code quality. It was clean, scalable, and well-documented, making the handover process incredibly smooth. It's rare to find a team that cares so much about the details.",
        name: "Priya Singh",
        position: "Lead Engineer, TechSolutions",
    },
    {
        text:
            "They brought our Figma designs to life with pixel-perfect accuracy. The micro-interactions and animations they added really elevated the user experience. A designer's dream partner!",
        name: "Sameer Verma",
        position: "Product Designer, Creative Minds",
    },
    {
        text:
            "Since launching the new website, our user engagement is up by 40%. The site is not only beautiful but also incredibly fast and SEO-friendly. Our marketing campaigns are finally getting the results they deserve.",
        name: "Ali Khan",
        position: "Marketing Head, Growthly",
    },
    {
        text:
            "The communication was seamless from start to finish. They kept us in the loop, delivered on time, and were always responsive to our feedback. A very professional and reliable team.",
        name: "Rahul Desai",
        position: "Project Manager, Nexus Enterprises",
    },
    {
        text:
            "This is our third project with Prenaya, and they consistently exceed our expectations. They're more than just a vendor; they're a true technology partner we can always count on.",
        name: "Sunita Gupta",
        position: "COO, BuildRight Inc.",
    },
];

// Main component that renders the section
const TestimonialsSection = () => {
    return (
        <section className="bg-white py-16 px-4 overflow-hidden">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-zinc-900">
                    What Our Clients Says
                </h2>
            </div>

            <div className="flex items-center justify-center">
                <TestimonialCardsSlider data={testimonials} />
            </div>
        </section>
    );
};

export default TestimonialsSection;

export const TestimonialCardsSlider = ({
    data,
    className = "",
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{
                duration: 0.3,
                delay: 0.5,
            }}
            className={`relative w-full max-w-3xl ${className}`}>
            <Swiper
                effect="cards"
                grabCursor={true}
                loop={false}
                className="testimonial-swiper-card h-[320px] w-[270px]"
                modules={[EffectCards, Navigation, Autoplay, Pagination]}
                slidesPerView={1}
                speed={400}
                threshold={10}
                longSwipesRatio={0.3}
                cardsEffect={{
                    perSlideOffset: 8,
                    perSlideRotate: 2,
                    slideShadows: false,
                }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index} className="rounded-2xl">
                        <div className="h-full w-full p-4 bg-white border border-gray-200 rounded-2xl flex flex-col justify-between select-text">
                            {/* Top Icon */}
                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4 text-gray-400">
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
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
                            <p className="text-sm text-zinc-700 mb-4 leading-relaxed select-text">"{item.text}"</p>

                            {/* Footer */}
                            <div className="flex items-center justify-between border-t pt-3">
                                <div>
                                    <h4 className="text-sm font-semibold text-zinc-900 select-text">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs text-gray-500 select-text">{item.position}</p>
                                </div>
                                {item.companyLogo && (
                                    <img
                                        src={item.companyLogo}
                                        alt={item.name}
                                        className="w-10 h-10 object-contain"
                                    />
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
};