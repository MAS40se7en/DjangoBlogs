import { NavLink } from 'react-router'

const ResponsiveNavBar = () => {
    return (
        <nav className="max-container padding-x py-6 max-md:block hidden dark:text-[#FFFFFF]">
            <ul className="flex items-center justify-center gap-6 text-[#3B3C4A] lg:flex-1 flex-col dark:text-[#FFFFFF]">
                <>
                    <li>
                        <NavLink
                            to="/auth/login"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Login
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/auth/register"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Register
                        </NavLink>
                    </li>
                </>

                <li className="font-semibold">
                    <NavLink
                        to="/create"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Create Post
                    </NavLink>
                </li>








            </ul>
        </nav>
    )
}

export default ResponsiveNavBar