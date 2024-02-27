
import { NavLink as RouterNavLink } from "react-router-dom"

const NavLink = ({path, text}) => {
  return (
    <div>
    <RouterNavLink to={path}  className={({ isActive }) =>
          isActive
            ? " text-amber-900"
            : "hover:text-amber-900"
        }>{text}</RouterNavLink>
      
    </div>
  )
}

export default NavLink
