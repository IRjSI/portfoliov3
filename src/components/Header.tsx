import { HomeIcon, PenIcon, PlusCircle, Sparkle, User2 } from "lucide-react"
import { ReactElement } from "react"
import { ModeToggle } from "./mode-toggle"
import { NavLink } from "react-router-dom"

interface menuInt { 
    logo: ReactElement,
    link: string
}

const Header = () => {
    const menu: menuInt[] = [
        {
            logo: <HomeIcon size={18} />,
            link: '/'
        },
        {
            logo: <User2 size={18} />,
            link: '/about'
        },
        {
            logo: <PenIcon size={18} />,
            link: '/skills'
        },
        {
            logo: <Sparkle size={18} />,
            link: '/projects'
        }
    ]
  return (
    <div className="flex gap-2 items-center justify-between px-4 py-2 dark:bg-[#212121] border dark:border-[#2c2c2c] rounded-md mb-4 shadow-sm">
        <div className="flex gap-2 items-center justify-center">
            {menu.map((item,ind) => (
                <div key={ind}>
                    <NavLink to={item.link} className="dark:hover:bg-[#323232] hover:bg-[#f4f4f5] text-[#989898] transition-all p-2 rounded-full cursor-pointer">{item.logo}</NavLink>
                </div>
            ))}
        </div>
        <div className="flex items-center gap-2">
            <ModeToggle />
            <p className="dark:bg-[#2b2b2b] border border-[#e4e4e7] dark:border-0 hover:bg-[#f4f4f5] px-2 py-1 rounded-sm font-light flex gap-2 items-center cursor-pointer dark:hover:bg-[#323232]"><PlusCircle size={12} /> Hire me</p>
        </div>
    </div>
  )
}

export default Header
