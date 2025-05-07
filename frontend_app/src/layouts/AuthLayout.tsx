import { Outlet } from "react-router"

export const AuthLayout = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen gap-5">
        <div className="md:min-w-1/2 lg:min-w-1/3 md:block hidden min-h-[500px] border-r pr-4">
            <div></div>
        </div>
        <Outlet />
    </div>
  )
}
