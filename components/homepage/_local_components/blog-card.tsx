import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { format } from "date-fns";
import * as motion from "framer-motion/client"

export default function BlogCard({ title, author, description, date, image, link, className }:
    { title: string, author?: string[], description: string, date: string, image: string, link: string, className?: string }) {

    const authors = author?.join(", ") || "Prokits"

    return (
        <Link href={link} className={cn("border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm  p-4 rounded-md bg-black flex-grow", className)}>
            <Image src={image} alt={title} width={400} height={200} className="rounded-md" />
            <motion.h2
                whileHover={{
                    color: "#fc926c",
                    transition: { duration: 0.3 }
                }}
                className="dark:text-white text-black mt-4 font-bold">
                {title}
            </motion.h2>
            <div className="text-sm dark:text-gray-400 text-black flex gap-4 justify-between my-2 mb-1 items-center">
                <span>
                    by
                    <span className="font-bold"> {authors}</span>
                </span>
                <p className="">
                    {format(new Date(date), "MMMM dd, yyyy")}
                </p>
            </div>
            <p className="text-sm font-light text-gray-400">
                {description}
            </p>
        </Link>
    )
}