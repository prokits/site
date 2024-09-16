import { cn } from "@/lib/utils"

export default function Callout({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <div className={cn(
            "bg-gray-700 border-l-4 border-gray-500 p-4 rounded-md shadow-sm my-2",
            "selection:bg-gray-800 selection:text-white",
            className
        )}>
            {children}
        </div>
    )
}