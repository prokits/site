import { notFound } from "next/navigation"
import { allBlogs, allAuthors } from "contentlayer/generated"

import { Mdx } from "@/components/mdx"
import { absoluteUrl } from "@/lib/utils"
import "@/styles/mdx.css"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { cn, formatDate } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface BlogPageProps {
    params: {
        slug: string
    }
}

async function getBlogFromParams(slug: string) {
    const blog = allBlogs.find((blog) => blog.slug === "/blog/" + slug)
    if (!blog) {
        notFound()
    }
    return blog
}

export async function generateMetadata({
    params,
}: BlogPageProps): Promise<Metadata> {
    const blog = await getBlogFromParams(params.slug)

    if (!blog) {
        return {}
    }

    const url = process.env.NEXT_PUBLIC_APP_URL

    const ogUrl = new URL(`${url}/api/og`)
    ogUrl.searchParams.set("heading", blog.title)
    ogUrl.searchParams.set("type", "Blog Post")
    ogUrl.searchParams.set("mode", "dark")

    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            title: blog.title,
            description: blog.description,
            type: "article",
            url: absoluteUrl(blog.slug),
            images: [
                {
                    url: ogUrl.toString(),
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.description,
            images: [ogUrl.toString()],
        },
    }
}

export async function generateStaticParams(): Promise<
    BlogPageProps["params"][]
> {
    return allBlogs.map((blog) => ({
        slug: blog.slug,
    }))
}

export default async function BlogPage({ params }: BlogPageProps) {
    const blog = await getBlogFromParams(params.slug)

    if (!blog) {
        notFound()
    }

    console.log(blog.authors)
    const authors = blog.authors.map((author) =>

        allAuthors.find(({ slug }) => slug === `/authors/${author.replace(/(\r\n|\n|\r)/gm, "")}`)
    )

    console.log(authors)

    return (
        <article className="container relative max-w-3xl py-6 lg:py-10">
            <Link
                href="/blog"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-[-200px] top-14 hidden xl:inline-flex",
                    "hover:bg-gray-900"
                )}
            >
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                See all posts
            </Link>
            <div>
                {blog.date && (
                    <time
                        dateTime={blog.date}
                        className="block text-sm text-muted-foreground"
                    >
                        Published on {formatDate(blog.date)}
                    </time>
                )}
                <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl">
                    {blog.title}
                </h1>

                {authors?.length ? (
                    <div className="mt-4 flex space-x-4">
                        {authors.map((author) =>
                            author ? (
                                <Link
                                    key={author._id}
                                    href={author.website}
                                    className="flex items-center space-x-2 text-sm"
                                    target="_blank"
                                >
                                    <Image
                                        src={author.avatar}
                                        alt={author.title}
                                        width={42}
                                        height={42}
                                        className="rounded-full bg-white"
                                    />
                                    <div className="flex-1 text-left leading-tight">
                                        <p className="font-medium">{author.title}</p>
                                        <p className="text-[12px] text-muted-foreground">
                                            @{author.twitter}
                                        </p>
                                    </div>
                                </Link>
                            ) : null
                        )}
                    </div>
                ) : null}
            </div>
            {blog.image && (
                <Image
                    src={blog.image}
                    alt={blog.title}
                    width={720}
                    height={405}
                    className="my-8 rounded-md border bg-muted transition-colors"
                    priority
                />
            )}
            <Mdx code={blog.body.code} />
            <hr className="mt-12 border-gray-400" />
            <div className="flex justify-center py-6 lg:py-10">
                <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }), "hover:bg-gray-900")}>
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    See all posts
                </Link>
            </div>
        </article>
    )
}
