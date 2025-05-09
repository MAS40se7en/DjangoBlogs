import api from "@/lib/api";

export async function getBlogs(page: number) {
    try {
        const response = await api.get(`api/list_blogs?page=${page}`)

        return response.data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch blogs')
    }
}

export async function getBlog(slug: string) {
    try {
        console.log(slug)
        const response = await api.get(`api/blogs/${slug}`)
        console.log(response)

        return response.data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch blog')
    }
}