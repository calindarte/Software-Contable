import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const LayoutRoot = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer className="bg-[rgb(66,66,66)] py-10 text-white">
      <div className="text-center text-sm font-thin ">
      
        <span>
          © Derechos de autor 2024. Hecho por <b>Carlos, Eulices y Kevin</b>
        </span>
      </div>
      </footer>
    </div>
  );
};

export default LayoutRoot;
