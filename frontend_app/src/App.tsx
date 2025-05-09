import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import { Home } from "./pages/Home"
import { AuthLayout } from "./layouts/AuthLayout"
import Login from "./pages/Login"
import { Register } from "./pages/Register"
import { DashboardLayout } from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Blog from "./pages/Blog"
import UserBlogs from "./pages/UserBlogs"
import CreateBlog from "./pages/CreateBlog"
import UpdateBlog from "./pages/UpdateBlog"
import Profile from "./pages/Profile"
import UpdateProfile from "./pages/UpdateProfile"
import Blogger from "./pages/Blogger"
import { getUsername } from "./services/apiBlog"

const App = () => {
    const [username, setUsername] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const { data } = useQuery({
        queryKey: ["username"],
        queryFn: () => getUsername()
    })

    useEffect(
        function () {
            if (data) {
                setIsAuthenticated(true);
                setUsername(data?.username);
            }
        },
        [data]
    )

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />

                <Route path='auth' element={<AuthLayout isAuthenticated={isAuthenticated} />}>
                    <Route path="login" element={<Login  setUsername={setUsername}
                        setIsAuthenticated={setIsAuthenticated} />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route
                    path='dashboard'
                    element={<DashboardLayout
                        isAuthenticated={isAuthenticated}
                        username={username}
                    />}
                >
                    <Route path='' element={<Dashboard />} />
                    <Route path='blogs/:slug' element={<Blog />} />
                    <Route path='myBlogs' element={<UserBlogs />} />
                    <Route path='createBlog' element={<CreateBlog />} />
                    <Route path='updateBlog/:id' element={<UpdateBlog />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='profile/:id' element={<Profile />} />
                    <Route path='updateProfile' element={<UpdateProfile />} />
                    <Route path='blogger/:id' element={<Blogger />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App