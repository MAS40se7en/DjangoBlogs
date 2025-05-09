import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home.tsx'
import { AuthLayout } from './layouts/AuthLayout.tsx'
import Login from './pages/Login.tsx'
import { Register } from './pages/Register.tsx'
import { DashboardLayout } from './layouts/DashboardLayout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Blog from './pages/Blog.tsx'
import UserBlogs from './pages/UserBlogs.tsx'
import CreateBlog from './pages/CreateBlog.tsx'
import UpdateBlog from './pages/UpdateBlog.tsx'
import Profile from './pages/Profile.tsx'
import UpdateProfile from './pages/UpdateProfile.tsx'
import Blogger from './pages/Blogger.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const root = document.getElementById('root')

const queryClient = new QueryClient()

ReactDOM.createRoot(root!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path='auth' element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path='dashboard' element={<DashboardLayout />}>
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
  </QueryClientProvider>
)
