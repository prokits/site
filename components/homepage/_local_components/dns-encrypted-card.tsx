import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { cn } from "@/lib/utils";

export function DNSEncryptedCard({ className }: { className?: string }) {

    return (
        <div className={cn("border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 rounded-md bg-black flex-grow", className)}>
            {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" /> */}

            <EvervaultCard text="encrypted" />

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
                Your DNS queries are encrypted and sent to our servers. We only maintain minimal metadata.
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
                Privacy is a right. Not a privilege.
            </p>
        </div>
    );
}
