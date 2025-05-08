import BlogsList from "@/components/BlogsList";
import PagePagination from "@/components/PagePagination";
import { getBlogs } from "@/services/apiBlog"
import { useQuery } from "@tanstack/react-query"

const Dashboard = () => {

  const { isPending, data: blogs, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: getBlogs,
  })

  console.log(blogs);

  return (
    <>
      <BlogsList isPending={isPending} blogs={blogs} error={error} />
      <PagePagination />
    </>
  )
}

export default Dashboard