import { createBrowserRouter } from "react-router-dom";
import LayoutRoot from "../layout/LayoutRoot";
import Home from "../pages/Home";
import InteresSimple from "../pages/InteresSimple";

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
            }
        ]
    }
])