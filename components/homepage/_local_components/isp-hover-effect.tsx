"use client";
import React from "react";
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

export function ISPHoverEffect() {
    return (
        <div className="flex flex-row items-center justify-center mx-auto">
            <AnimatedTooltip items={isps} />
        </div>
    );
}
