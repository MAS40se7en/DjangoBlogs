import Navbar from "@/components/Navbar"
import { Outlet } from "react-router"

export const DashboardLayout = () => {

    
  return (
    <div className="dark">
      <main className="dark:bg-black w-full bg-white">
        <Navbar />
            <Outlet />
            <h1 className="dark:text-white dark:bg-black">hello</h1>
        </main>
    </div>
  )
}
