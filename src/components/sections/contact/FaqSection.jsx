// src/components/sections/contact/FaqSection.jsx
import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// FAQ data configuration. Update questions and answers here.
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
        <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10 sm:mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base lg:text-lg text-neutral-600">
                        Find answers to common questions about our services and process.
                    </p>
                </motion.div>

                {/* Accordion List with animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-3">
                        {faqData.map((faq) => (
                            <AccordionItem
                                key={faq.value}
                                value={faq.value}
                                className="bg-[#f9fbfe] border border-gray-200 rounded-lg px-4 sm:px-6 transition-colors hover:bg-gray-50"
                            >
                                <AccordionTrigger className="text-left font-semibold text-base sm:text-lg hover:no-underline py-4">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-sm sm:text-base text-neutral-700 leading-relaxed pb-4">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    )
}

export default FaqSection