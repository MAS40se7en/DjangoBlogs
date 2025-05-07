import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import { Link } from "react-router"

export const Home = () => {
    return (
        <div className="flex w-full h-screen items-center justify-center flex-col gap-10">
            <div className="flex flex-col gap-4 items-center justify-center border border-foreground p-4 rounded-xl">
                <div className="flex flex-col gap-4 items-center justify-center text-center border-2 border-foreground p-4 rounded-xl">
                    <div className="flex flex-col gap-4 p-4 border-4 border-foreground rounded-xl">
                        <h1 className="text-xl font-semibold">Welcome To <span className="text-3xl font-bold">DJANGO<span className="font-extrabold">BLOGS</span></span></h1>
                        <div className="flex flex-col gap-4 w-md">
                            <Link className="link" to="/auth/login">Login</Link>
                            <Link className="link" to="/auth/register">Register</Link>
                            <Button className="py-7 rounded-xl bg-accent text-black text-lg cursor-pointer hover:bg-accent-foreground/10 active:bg-accent-foreground/30"><Icon icon="devicon:google" width="128" height="128" />Continue with Google</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
