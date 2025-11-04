// src/components/ui/ServiceCard.jsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
// ===== ASLI FIX YAHAN HAI =====
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ServiceCard = ({ icon, title, description, className }) => {
    return (
        // 'group' class hover effect ke liye zaroori hai
        <Card className={cn("relative group overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2", className)}>

            {/* Blue line wala hover effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-lg">
                    {icon}
                </div>
                <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className="flex-grow">
                <CardDescription>{description}</CardDescription>
            </CardContent>

            <CardFooter>
                <Button variant="outline">Learn More</Button>
            </CardFooter>
        </Card>
    );
};

export default ServiceCard;