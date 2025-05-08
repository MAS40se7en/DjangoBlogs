import type { Blog } from "@/lib/types"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { FormatDate } from "@/lib/formatDate"

const BlogCard = ({ blog }: { blog: Blog }) => {
    return (
        <Card>
            <CardHeader>
                <img src={blog.featured_image} alt="blog_image" className="w-full h-40" />
                <p className="text-sm bg-accent w-fit px-3 py-1 rounded-md">{blog.category}</p>

                <CardTitle>{blog.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                        <img src={blog.author.profile_image} alt="author_image" className="w-10 h-10 rounded-full" />
                        <p className="text-sm">{blog.author.username}</p>
                    </div>
                    <p className="text-sm opacity-50">{FormatDate(blog.published_at)}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default BlogCard