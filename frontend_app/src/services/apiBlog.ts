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