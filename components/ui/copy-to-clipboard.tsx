"use client"
import { cn } from "@/lib/utils"

export function CopyToClipboard({ children, text, className }: { children: React.ReactNode, text: string, className?: string }) {
    return (
        <div className={cn("flex items-center justify-start gap-2", className)}>
            {children}

        </div>
    )
}