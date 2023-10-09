import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Partner from "../pages/Partner/Partner";
import Contact from "../pages/Contact/Contact";
import Details from "../pages/Details/Details";

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
            {
                path: '/:id',
                element: <Details></Details>,
                loader: () => fetch('../blogs.json')
              }
        ]
    },
]);

export default router;