import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Phone, Clock, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactDetails = [
    {
        icon: MapPin,
        label: "Our Location",
        value: "Kopargaon, near sanjivani university, Maharashtra, 423603",
    },
    {
        icon: Phone,
        label: "Phone Number",
        value: "7588529311 | 9359830852",
    },
    {
        icon: Mail,
        label: "Email Address",
        value: "contact@prenayasofttech.com",
    },
    {
        icon: Clock,
        label: "Business Hours",
        value: "Mon-Fri: 9AM–6PM, Sat: 10AM–4PM",
    },
];

const GetInTouchSection = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectChange = (value) => {
        setFormData((prev) => ({ ...prev, service: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false);

        toast({
            title: (
                <div className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                    <span className="font-bold">Message Sent Successfully!</span>
                </div>
            ),
            description: "Our team will get back to you shortly.",
            duration: 5000,
        });

        setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            service: "",
            message: "",
        });
    };

    return (
        <section className="bg-[#f8f9fc] py-20 px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Get In Touch</h2>
                <p className="mt-2 text-neutral-600 sm:text-base text-sm">
                    Ready to start your next project? Let's discuss how we can help you achieve your goals.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Input name="name" placeholder="Full Name *" required value={formData.name} onChange={handleInputChange} />
                        <Input name="email" type="email" placeholder="Email Address *" required value={formData.email} onChange={handleInputChange} />
                        {/* ✅ FIX: Extra 'name' attribute hata diya */}
                        <Input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
                        <Input name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} />
                    </div>

                    <Select onValueChange={handleSelectChange} value={formData.service}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="mobile">Mobile App Development</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="cloud">Cloud Solutions</SelectItem>
                            <SelectItem value="marketing">Digital Marketing</SelectItem>
                        </SelectContent>
                    </Select>

                    <Textarea name="message" placeholder="Message *" rows={4} required value={formData.message} onChange={handleInputChange} />

                    <Button type="submit" className="w-full font-heading" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </Button>
                </form>

                <div className="space-y-4">
                    {contactDetails.map((item, index) => (
                        <div key={index} className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-200">
                            <div className="p-2 bg-primary/10 rounded-md text-primary mr-4">
                                <item.icon className="h-5 w-5" />
                            </div>
                            <div>
                                <p className="font-medium text-zinc-800">{item.label}</p>
                                <p className="text-sm text-zinc-600">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInTouchSection;