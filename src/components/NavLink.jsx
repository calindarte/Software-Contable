
import { NavLink as RouterNavLink } from "react-router-dom"

const NavLink = ({path, text}) => {
  return (
    <div>
    <RouterNavLink to={path}  className={({ isActive }) =>
          isActive
            ? " text-amber-950 font-medium"
            : " relative py-3 group text-sm lg:text-base"
        } >
        
        <span className="group-hover:text-amber-800">{text}</span>
          <span className="absolute bottom-0 left-0 h-[3px] w-full transition-all duration-500 scale-x-0 group-hover:scale-x-100 group-hover:bg-amber-800"></span>
        </RouterNavLink>

      
    </div>
  )
}

export default NavLink
