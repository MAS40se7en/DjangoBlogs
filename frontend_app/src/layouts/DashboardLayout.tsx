import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Navigate, Outlet } from "react-router"
import { ToastContainer } from "react-toastify"

export const DashboardLayout = ({ isAuthenticated, username }: { isAuthenticated: boolean, username: string }) => {

  if (!isAuthenticated) {
    Navigate({ to: "/auth/login" })
  }


  return (
    <div>
      <main className="w-full bg-white dark:bg-[#141624] ">
        <ToastContainer />
        <Navbar
          isAuthenticated={isAuthenticated}
          username={username}
        />
        <div className="px-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
