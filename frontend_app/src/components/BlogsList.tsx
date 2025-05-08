import type { Blog } from "@/lib/types"
import { Icon } from "@iconify/react/dist/iconify.js"
import BlogCard from "./BlogCard"

const BlogsList = ({ isPending, blogs, error }: { isPending: boolean, blogs: Blog[], error: Error | null }) => {
    return (
        <div>
            {isPending ?
                <Icon icon="codex:loader" className="w-24 h-24" />
                :
                blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))
            }
            {error && <p>error getting blogs</p>}
        </div>
    )
}

export default BlogsList