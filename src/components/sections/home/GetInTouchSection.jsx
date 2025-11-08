// src/components/sections/home/GetInTouchSection.jsx
import { useState } from "react"
import { SiX } from "react-icons/si"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Clock, Loader2, CheckCircle, XCircle, Linkedin, Instagram, Github } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// Phone validation regex
const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/

// Enhanced validation schema
const formSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string()
    .regex(phoneRegex, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  company: z.string().max(100, "Company name too long").optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must be less than 500 characters"),
})

// Services data (reusable)
const services = [
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile App Development" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "cloud", label: "Cloud Solutions" },
  { value: "marketing", label: "Digital Marketing" },
]

const contactDetails = [
  { icon: MapPin, label: "Our Location", value: "Kopargaon,423603, Maharshtra Yeola,423401, Maharashtra" },
  { icon: Phone, label: "Phone Number", value: "7588529311 | 9359830852" },
  { icon: Mail, label: "Email Address", value: "contact@prenayasofttech.com" },
  { icon: Clock, label: "Business Hours", value: "Mon-Fri: 9AM–6PM, Sat: 10AM–4PM" },
]

const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/company/prenayasofttech", icon: Linkedin },
  { name: "X (Twitter)", url: "https://x.com/prenayasofttech", icon: SiX },
  { name: "Instagram", url: "https://instagram.com/prenayasofttech", icon: Instagram },
  { name: "GitHub", url: "https://github.com/prenayasofttech", icon: Github },
]

const GetInTouchSection = () => {
  const [submitError, setSubmitError] = useState(false)
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { 
      name: "", 
      email: "", 
      phone: "", 
      company: "", 
      service: "", 
      message: "" 
    },
  })

  const isLoading = form.formState.isSubmitting

  // Form submission with error handling
  const handleSubmit = async (data) => {
    setSubmitError(false)
    
    try {
      // Simulated API call - replace with actual endpoint
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          const shouldSucceed = Math.random() > 0.3 // 70% success rate for demo
          shouldSucceed ? resolve(data) : reject(new Error('Network error'))
        }, 1500)
      })

      // Success toast
      toast({
        title: (
          <div className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            <span className="font-bold">Message Sent!</span>
          </div>
        ),
        description: "Our team will get back to you within 24 hours.",
      })

      form.reset()
      
    } catch (error) {
      setSubmitError(true)
      
      // Error toast
      toast({
        variant: "destructive",
        title: (
          <div className="flex items-center">
            <XCircle className="mr-2 h-5 w-5" />
            <span className="font-bold">Failed to Send</span>
          </div>
        ),
        description: "Please try again or contact us directly.",
      })
    }
  }

  return (
    <section className="bg-[#f8f9fc] py-20 px-4">
      
      {/* Animated Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Get In Touch</h2>
        <p className="mt-2 text-neutral-600 sm:text-base text-sm max-w-2xl mx-auto">
          Ready to start your next project? Let's discuss how we can help.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Contact Form with Animation - COMPLETE HAI AB! */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(handleSubmit)} 
              className="space-y-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow" 
              noValidate
            >
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField 
                  control={form.control} 
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} 
                />
                
                <FormField 
                  control={form.control} 
                  name="email" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@email.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} 
                />
              </div>

              {/* Phone & Company Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField 
                  control={form.control} 
                  name="phone" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+91 12345 67890" type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} 
                />
                
                <FormField 
                  control={form.control} 
                  name="company" 
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company Inc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} 
                />
              </div>

              {/* Service Selection Dropdown */}
              <FormField 
                control={form.control} 
                name="service" 
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service you're interested in" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.value} value={service.value}>
                            {service.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )} 
              />

              {/* Message Textarea */}
              <FormField 
                control={form.control} 
                name="message" 
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        rows={4} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} 
              />

              {/* Enhanced Submit Button */}
              <Button 
                type="submit" 
                className="w-full group" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <span className="group-hover:scale-105 transition-transform inline-block font-heading">
                    Send Message
                  </span>
                )}
              </Button>

              {/* Error Message Display */}
              {submitError && (
                <p className="text-sm text-red-500 text-center">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </Form>
        </motion.div>

        {/* Contact Details with Animation */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          {contactDetails.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all hover:scale-[1.02]"
            >
              <div className="p-2 bg-primary/10 rounded-md text-primary mr-4 flex-shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-zinc-800">{item.label}</p>
                <p className="text-sm text-zinc-600 break-words">{item.value}</p>
              </div>
            </motion.div>
          ))}

          {/* Social Links Card */}
          <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-200">
            <p className="font-medium text-zinc-800 mb-3">Follow Us</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={`Follow us on ${social.name}`} 
                  className="p-2 bg-gray-100 rounded-full text-zinc-600 hover:bg-primary/10 hover:text-primary hover:scale-110 transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GetInTouchSection