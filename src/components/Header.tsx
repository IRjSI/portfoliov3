import { Contact, HomeIcon, PenIcon, PlusCircle, Sparkle } from "lucide-react"
import { ReactElement } from "react"
import { ModeToggle } from "./mode-toggle"
import { Link, NavLink } from "react-router-dom"
import { motion } from "framer-motion"

interface menuInt { 
    name: string,
    logo: ReactElement,
    link: string
}

const Header = () => {
    const menu: menuInt[] = [
        {
            name: "Home",
            logo: <HomeIcon size={18} />,
            link: '/'
        },
        {
            name: "Skills",
            logo: <PenIcon size={18} />,
            link: '/skills'
        },
        {
            name: "Projects",
            logo: <Sparkle size={18} />,
            link: '/projects'
        },
        {
            name: "Contact",
            logo: <Contact size={18} />,
            link: '/contact'
        }
    ]

  return (
    <div>
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }} 
        className="flex gap-2 items-center justify-between px-4 dark:bg-[#212121] border dark:border-[#636363] rounded-md mb-4 shadow-sm"
    >
        <div className="flex sm:gap-8 gap-4 items-center justify-center">
            {menu.map((item,ind) => (
                <div key={ind} title={item.name}>
                    <NavLink 
                        style={({ isActive }) => ({
                            color:
                            isActive ? "#00a63e" : "#989898"
                        })}
                        to={item.link}
                        className={`text-[#989898] transition-all px-2 rounded-full cursor-pointer`}
                        >
                        {item.logo}
                    </NavLink>
                </div>
            ))}
        </div>
        <div className="flex items-center gap-2">
            <ModeToggle />
            <Link to={'/contact'} className="dark:bg-[#2b2b2b] border border-[#e4e4e7] dark:border-0 hover:bg-[#f4f4f5] px-2 py-1 rounded-sm font-light flex gap-2 items-center cursor-pointer dark:hover:bg-[#323232]"><PlusCircle size={12} /> Hire me</Link>
        </div>
        
    </motion.div>
    </div>
  )
}

export default Header
