import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Home from "../pages/Home";
import InteresSimple from "../pages/InteresSimple";
import  InteresCompuesto  from "../pages/InteresCompuesto";
import Anualidad from "../pages/Anualidad";
import Gradientes from "../pages/Gradientes";
import AmortizacionCapitalizacion from "../pages/AmortizacionCapitalizacion";
import TasaInternaRetorno from "../pages/TasaInternaRetorno";

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
            },
            {
                path:'/gradientes',
                element: <Gradientes/>,
            },
            {
                path:'/amortizacion-capitalizacion',
                element: <AmortizacionCapitalizacion/> ,
            },
            {
                path:'/tasa-interna-retorno',
                element: <TasaInternaRetorno/> ,
            }
        ]
    }
])