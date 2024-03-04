import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Home from "../pages/Home";
import InteresSimple from "../pages/InteresSimple";
import  InteresCompuesto  from "../pages/InteresCompuesto";
import Anualidad from "../pages/Anualidad";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutRoot/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path:'/interes-simple',
                element: <InteresSimple/>,
            },
            {
                path:'/interes-compuesto',
                element: <InteresCompuesto/>,
            },
            {
                path:'/anualidad',
                element: <Anualidad/>,
            }
        ]
    }
])