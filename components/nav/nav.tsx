"use client";

import { usePathname } from 'next/navigation'
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function NavBar() {
    const pathname = usePathname()
    const background = pathname == "/" ? "bg-black" : "bg-gray-900"

    return (
        <div className={`border-t-4 border-red_branding ${background}`}>
            <motion.header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 py-2 max-w-7xl mx-auto "
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                            <Image src="/logo/logo_dark.svg" alt="Prokits" width={100} height={100} />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <div className="grid gap-2 py-6">
                            <Link href="/dns" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                DNS
                            </Link>
                            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                TOR
                            </Link>
                            <Link href="/about" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                About
                            </Link>
                            <Link href="/docs" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                Docs
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
                <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
                    <Image src="/logo/logo_dark.svg" alt="Prokits" width={150} height={100} />
                    <span className="sr-only">Prokits Digital</span>
                </Link>
                <nav className="ml-auto hidden lg:flex gap-6">
                    <Link
                        href="/dns"
                        prefetch={false}
                        className={cn(
                            "py-2 text-lg",
                            pathname == "/dns" ? "text-red_branding border-b-4 border-red_branding pb-0 font-bold" : "text-white"
                        )}
                    >
                        DNS
                    </Link>
                    <Link
                        href=""
                        prefetch={false}
                        className={cn(
                            "py-2 text-lg",
                            pathname == "/tor" ? "text-red_branding border-b-4 border-red_branding pb-0 font-bold" : "text-white"
                        )}
                    >
                        TOR
                    </Link>
                    <Link
                        href="/about"
                        prefetch={false}
                        className={cn(
                            "py-2 text-lg",
                            pathname == "/about" ? "text-red_branding border-b-4 border-red_branding pb-0 font-bold" : "text-white"
                        )}
                    >
                        About
                    </Link>
                    <Link
                        href="/docs"
                        prefetch={false}
                        className={cn(
                            "py-2 text-lg",
                            pathname == "/docs" ? "text-red_branding border-b-4 border-red_branding pb-0 font-bold" : "text-white"
                        )}
                    >
                        Docs
                    </Link>
                </nav>
            </motion.header>
        </div>
    )
}

function MenuIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


