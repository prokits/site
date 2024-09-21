"use client"

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
    return (
        <div className="max-w-5xl md:-mx-2">
            <HoverEffect items={projects} />
        </div>
    );
}
export const projects = [
    {
        title: "Basics of DNS",
        description:
            "What is DNS? How does it work? What are DNS records?",
        link: "/docs/dns",
    },

    {
        title: "Using AdGuard at home",
        description:
            "How to setup and use AdGuard at home. AdGuard is a privacy-focused ad-blocker and DNS server. It can be used to block ads, trackers, and malicious websites.",
        link: "/docs/adguard",
    },

    {
        title: "Using PiHole at home",
        description:
            "How to setup and use PiHole at home.",

        link: "/docs/pihole",
    },
    {

        title: "Networking 101: Home Lab",
        description:
            "How to setup a home lab and get started with networking. You will learn about different network topologies, protocols, and how to configure your home network.",
        link: "/docs/homelab",
    },

    {
        title: "Using Cloudflare at home",
        description:
            "How to setup and use Cloudflare at home.",
        link: "/docs/cloudflare",
    },

    {
        title: "Using Cloudflare at home",
        description:
            "How to setup and use Cloudflare at home.",
        link: "/docs/cloudflare",
    },
];

