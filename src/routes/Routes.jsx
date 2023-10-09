import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Partner from "../pages/Partner/Partner";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/partner',
                element: <Partner></Partner>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
        ]
    },
]);

export default router;