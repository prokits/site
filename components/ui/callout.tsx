import { cn } from "@/lib/utils"

export default function Callout({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <div className={cn(
            "bg-zinc-800 border-l-4 border-zinc-700 p-4 rounded-md shadow-sm my-2",
            "selection:bg-zinc-700 selection:text-white",
            className
        )}>
            {children}
        </div>
    )
}