// src/components/sections/GetInTouchSection.jsx - COMPLETE CORRECTED CODE

import { SiX } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Clock, Loader2, CheckCircle, Linkedin, Instagram, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional(),
    company: z.string().optional(),
    service: z.string().min(1, { message: "Please select a service." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const contactDetails = [
    { icon: MapPin, label: "Our Location", value: "Kopargaon, near Sanjivani University, Maharashtra, 423603 Yeola, Amardham Rd, Maharashtra, 423401" },
    { icon: Phone, label: "Phone Number", value: "7588529311 | 9359830852" },
    { icon: Mail, label: "Email Address", value: "contact@prenayasofttech.com" },
    { icon: Clock, label: "Business Hours", value: "Mon-Fri: 9AM–6PM, Sat: 10AM–4PM" },
];

const socialLinks = [
    { name: "LinkedIn", url: "#", icon: Linkedin },
    // --- YAHAN GALTI THI, AB SAHI HAI ---
    { name: "X (Twitter)", url: "#", icon: SiX },
    // ------------------------------------
    { name: "Instagram", url: "#", icon: Instagram },
    { name: "GitHub", url: "#", icon: Github },
];

const GetInTouchSection = () => {
    const { toast } = useToast();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", phone: "", company: "", service: "", message: "" },
    });

    const isLoading = form.formState.isSubmitting;

    const handleSubmit = async (data) => {
        console.log("Form Data:", data);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast({
            title: (<div className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-500" /><span className="font-bold">Message Sent!</span></div>),
            description: "Our team will get back to you shortly.",
        });
        form.reset();
    };

    return (
        <section className="bg-[#f8f9fc] py-20 px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Get In Touch</h2>
                <p className="mt-2 text-neutral-600 sm:text-base text-sm">
                    Ready to start your next project? Let's discuss how we can help.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:items-start">

                {/* --- Left Side: Form --- */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 bg-white p-6 rounded-xl shadow-md" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="email" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl><Input placeholder="john.doe@email.com" type="email" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="phone" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl><Input placeholder="+91 12345 67890" type="tel" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                            <FormField control={form.control} name="company" render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company</FormLabel>
                                    <FormControl><Input placeholder="Your Company Inc." {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>
                        <FormField control={form.control} name="service" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Service</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl><SelectTrigger><SelectValue placeholder="Select a service you're interested in" /></SelectTrigger></FormControl>
                                    <SelectContent>
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="mobile">Mobile App Development</SelectItem>
                                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                                        <SelectItem value="cloud">Cloud Solutions</SelectItem>
                                        <SelectItem value="marketing">Digital Marketing</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <FormField control={form.control} name="message" render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl><Textarea placeholder="Tell us about your project..." rows={4} {...field} /></FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                        <Button type="submit" className="w-full font-heading" disabled={isLoading}>
                            {isLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>) : ("Send Message")}
                        </Button>
                    </form>
                </Form>

                {/* --- Right Side: Details + Social Links --- */}
                <div className="space-y-4">
                    {contactDetails.map((item, index) => (
                        <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                            <div className="p-2 bg-primary/10 rounded-md text-primary mr-4"><item.icon className="h-5 w-5" /></div>
                            <div>
                                <p className="font-medium text-zinc-800">{item.label}</p>
                                <p className="text-sm text-zinc-600">{item.value}</p>
                            </div>
                        </div>
                    ))}
                    <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                        <p className="font-medium text-zinc-800 mb-3">Follow Us</p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${social.name}`} className="p-2 bg-gray-100 rounded-full text-zinc-600 hover:bg-primary/10 hover:text-primary transition-colors">
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInTouchSection;