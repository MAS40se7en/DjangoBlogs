import Navbar from "@/components/Navbar"
import { Outlet } from "react-router"

export const DashboardLayout = () => {
  return (
    <>
        <Navbar />
        <body>
            <Outlet />
        </body>
    </>
  )
}
