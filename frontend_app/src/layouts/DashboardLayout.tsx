import Navbar from "@/components/Navbar"
import { Outlet } from "react-router"

export const DashboardLayout = () => {


  return (
    <div>
      <main className="w-full bg-white dark:bg-[#141624] ">
        <Navbar />
        <div className="px-10">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
