import { Icon } from "@iconify/react"
import { Switch } from "./ui/switch"

const Navbar = () => {
  return <nav className="max-container padding-x py-6 flex justify-between items-center gap-6 sticky top-0 z-10 bg-white dark:bg-[#141624] pl-10 pr-4">
    <a href="/" className="text-[#141624] text-2xl dark:text-[#FFFFFF]">
        LOGO
    </a>
    <ul className="flex items-center justify-end gap-9 text-[#383C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
        <li>Hi, Clinton</li>
        <li>Logout</li>
        <li>Login</li>
        <li>Register</li>
        <li className="font-semibold">Create post</li>
    </ul>
    <Switch />
    <Icon icon="icon-park:hamburger-button" className="text-black md:hidden block w-10 h-10" />
  </nav>
}

export default Navbar