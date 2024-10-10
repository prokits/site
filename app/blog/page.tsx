import Image from "next/image"
import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import { compareDesc } from "date-fns"

import { formatDate } from "@/lib/utils"

export const metadata = {
    title: "Blog",
}

export default async function BlogPage() {
    const blogs = allBlogs
        .filter((blog) => blog.published)
        .sort((a, b) => {
            return compareDesc(new Date(a.date), new Date(b.date))
        })

    return (
        <div className="container max-w-4xl py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
                        Blog
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        The latest news, tips, and insights from the team at Prokits.
                    </p>
                </div>
            </div>
            <hr className="my-8 border-gray-600" />
            {blogs?.length ? (
                <div className="grid gap-10 sm:grid-cols-2">
                    {blogs.map((blog, index) => (
                        <article
                            key={blog._id}
                            className="group relative flex flex-col space-y-2"
                        >
                            {blog.image && (
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    width={804}
                                    height={452}
                                    className="rounded-md border bg-muted transition-colors"
                                    priority={index <= 1}
                                />
                            )}
                            <h2 className="text-2xl font-extrabold">{blog.title}</h2>
                            {blog.description && (
                                <p className="text-muted-foreground">{blog.description}</p>
                            )}
                            {blog.date && (
                                <p className="text-sm text-muted-foreground">
                                    {formatDate(blog.date)}
                                </p>
                            )}
                            <Link href={blog.slug} className="absolute inset-0">
                                <span className="sr-only">View Article</span>
                            </Link>
                        </article>
                    ))}
                </div>
            ) : (
                <p>No posts published.</p>
            )}
        </div>
    )
}
