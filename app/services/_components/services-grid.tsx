import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { Shell } from "lucide-react";
import Image from "next/image";

type ServicesItem = {
    title: string;
    description: string;
    header: React.ReactNode;
    className: string;
    icon: React.ReactNode;
};

export default function ServicesGrid({ className }: { className?: string }) {
    return (
        <BentoGrid className={
            cn("max-w-4xl mx-auto md:auto-rows-[20rem]", className)
        }>
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
}

const items = [
    {
        title: "Prokits DNS",
        description: "DNS.Prokits is a Free and Fast Public DNS Server for Indian users.",
        header: <Image src="/images/services/prokits_dns.webp" alt="DNS.Prokits" width={1200} height={400} className="rounded-xl" />,
        className: "md:col-span-2",
        icon: <Shell className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Web Design",
        description: "We design and develop websites that are beautiful and functional.",
        header: <Image src="/images/services/web_design_light.webp" alt="DNS.Prokits" width={560} height={400} className="rounded-xl" />,
        className: "md:col-span-1",
        icon: <Shell className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Network Security",
        description: "Protect your network from cyber threats with our security solutions.",
        header: <Image src="/images/services/network_security.webp" alt="DNS.Prokits" width={560} height={400} className="rounded-xl" />,
        className: "md:col-span-1",
        icon: <Shell className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Custom Software",
        description:
            "We build custom software solutions that are tailored to your business needs.",
        header: <Image src="/images/services/custom_solutions.webp" alt="DNS.Prokits" width={560} height={400} className="rounded-xl" />,
        className: "md:col-span-2",
        icon: <Shell className="h-4 w-4 text-neutral-500" />,
    },
];
