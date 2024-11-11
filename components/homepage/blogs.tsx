import { allBlogs } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import BlogCard from "./_local_components/blog-card";

export default function BlogsPreview() {
    const blogs = allBlogs
        .filter((blog) => blog.published)
        .sort((a, b) => {
            return compareDesc(new Date(a.date), new Date(b.date))
        })
        .slice(0, 3)


    return (
        <div className="max-w-7xl p-2 mx-auto py-20 mb-10">
            <div className="flex justify-center items-center mb-6 lg:mb-10">
                <span className="absolute mx-auto py-2 flex border w-fit bg-gradient-to-r blur-xl from-red_branding via-red-500 to-red-300 bg-clip-text text-4xl box-content font-extrabold text-transparent text-center select-none">
                    Recent Blogs
                </span>
                <h1
                    className="relative top-0 w-fit h-auto py-2 justify-center flex bg-gradient-to-r items-center from-red_branding via-red-500 to-red-300 bg-clip-text text-4xl font-extrabold text-transparent text-center select-auto">
                    Recent Blogs
                </h1>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
                {blogs.map((blog, index) => (
                    <BlogCard
                        key={blog.title}
                        title={blog.title}
                        author={blog.authors}
                        description={blog.description}
                        date={blog.date}
                        link={blog.slug}
                        image={blog.image}
                    />
                ))}
            </div>

        </div>
    )
}