import { cn } from "@/lib/utils";

export function Page({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <section className={cn(
            "max-w-7xl mx-auto",
            "p-4 md:p-6 mt-4 md:mt-8",
            'min-h-screen',
            className
        )}>
            {children}
        </section>
    )
}

export function PageTitle({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <h1 className={cn(
            "h-20 w-full px-4 md:px-6 py-2 pb-4 text-3xl font-semibold",
            className
        )}>
            {children}
        </h1>
    )
}

export function PageSubtitle({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <h2 className={cn(
            " w-full pt-2 pb-1 text-2xl font-semibold",
            className
        )}>
            {children}
        </h2>
    )
}

export function PageContent({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <main className={cn(
            "px-4 md:px-6 py-2 max-w-7xl mx-auto",
            className
        )}>
            {children}
        </main>
    )
}

export function PageFooter({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <div className={cn(
            "flex h-20 w-full shrink-0 items-center px-4 md:px-6 py-2 max-w-7xl mx-auto",
            className
        )}>
            {children}
        </div>
    )
}

export function Paragraph({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <p className={cn(
            "py-4 max-w-[72ch]",
            className
        )}>
            {children}
        </p>
    )
}

