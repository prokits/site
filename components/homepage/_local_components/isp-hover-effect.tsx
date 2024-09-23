"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const isps = [
    {
        id: 1,
        name: "Jio",
        description: "Can see your internet traffic!",
        image:
            "/images/isp/jio.webp",
    },
    {
        id: 2,
        name: "Bharati Airtel",
        description: "Can see your internet traffic!",
        image:
            "/images/isp/airtel.png",
    },
    {
        id: 3,
        name: "Vodafone Idea",
        description: "Can see your internet traffic!",
        image:
            "/images/isp/vi.webp",
    },
];

export function ISPHoverEffect({ className }: { className?: string }) {
    return (
        <div className={cn("flex flex-row items-center justify-center mx-auto", className)}>
            <AnimatedTooltip items={isps} />
        </div>
    );
}
