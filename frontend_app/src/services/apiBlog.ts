import api from "@/lib/api";

export async function getBlogs() {
    try {
        const response = await api.get('api/list_blogs/')

        return response.data
    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch blogs')
    }
}