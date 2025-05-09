import api from "@/lib/api";
import type { BlogFormValues, RegisterFormValues } from "@/lib/Schema";
import { isAxiosError } from "axios";

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

export async function registerUser(data: RegisterFormValues) {
    try {
        const response = await api.post(`api/register/`, data)
        return response.data
    } catch (error) {
        console.error(error)
        if (isAxiosError(error) && error.response?.status === 400) {
            throw new Error("User already exists")
        }
        throw new Error('Failed to register user')
    }
}

export async function createBlog(data: BlogFormValues) {
    try {
        const response = await api.post(`api/create_blog/`, data)
        return response.data
    } catch (error) {
        console.error(error)
        if (isAxiosError(error) && error.response?.status === 400) {
            throw new Error("Failed to create blog")
        }
        throw new Error('Failed to create blog')
    }
}