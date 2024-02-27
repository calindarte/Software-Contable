import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

const LayoutRoot = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
      
    </div>
  )
}

export default LayoutRoot
