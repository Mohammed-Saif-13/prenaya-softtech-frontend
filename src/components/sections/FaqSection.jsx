// src/components/sections/FaqSection.jsx

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

// 1. YAHAN APNE SAWAAL-JAWAB DAAL DE
const faqData = [
    {
        value: "item-1",
        question: "What services does Prenaya Softtech offer?",
        answer: "We specialize in custom web development, mobile app development, UI/UX design, e-commerce solutions, and cloud services to help your business grow.",
    },
    {
        value: "item-2",
        question: "How long does it take to build a website?",
        answer: "The timeline for a website project varies depending on its complexity. A basic marketing site can take 4-6 weeks, while a complex e-commerce platform can take 3-6 months.",
    },
    {
        value: "item-3",
        question: "How much will my project cost?",
        answer: "Project costs are tailored to your specific requirements. After our initial consultation, we'll provide a detailed proposal and quote with a clear breakdown of costs.",
    },
    {
        value: "item-4",
        question: "Do you provide support after the project is launched?",
        answer: "Yes, we offer various support and maintenance packages to ensure your website or application runs smoothly and stays up-to-date after launch.",
    },
    {
        value: "item-5",
        question: "Can you help with an existing project?",
        answer: "Absolutely! We can step in to help with existing projects, whether you need to fix bugs, add new features, or improve performance. Contact us to discuss the details.",
    },
];

const FaqSection = () => {
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 font-heading">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-3 text-lg text-neutral-600">
                        Find answers to common questions about our services and process.
                    </p>
                </div>

                {/* Accordion List */}
                <Accordion type="single" collapsible className="w-full">
                    {faqData.map((faq) => (
                        <AccordionItem key={faq.value} value={faq.value}>
                            <AccordionTrigger className="text-left font-semibold text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-base text-neutral-700">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FaqSection;