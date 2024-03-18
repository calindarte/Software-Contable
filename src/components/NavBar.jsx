import Logo from "../images/Logo.png"
import NavLink from "./NavLink"

const NavBar = () => {
  return (
    <>
    <div className="flex top-0 w-full  items-center justify-between px-20 py-2 bg-amber-400">
    <img src={Logo} alt="Logo" className="size-20" />
    <nav className="flex gap-x-5 text-gray-900">
    <NavLink path="/" text="Inicio"/>
    <NavLink path="/interes-simple" text="Interes Simple"/>
    <NavLink path="/interes-compuesto" text="Interes Compuesto"/>
    <NavLink path="/anualidad" text="Anualidad"/>




    </nav>
    </div>
    </>
    
      
  
  )
}

export default NavBar
