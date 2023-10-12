import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Partner from "../pages/Partner/Partner";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Details from "../pages/Details/Details";
import Signup from "../pages/Signup/Signup";
import Signin from "../pages/Signin/Signin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/partner',
                element: <PrivateRoute><Partner></Partner></PrivateRoute>,
            },
            {
                path: '/contact',
                element: <PrivateRoute><Contact></Contact></PrivateRoute>,
            },
            {
                path: '/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('../blogs.json')
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
            {
                path: '/signin',
                element: <Signin></Signin>,
            },
        ]
    },
]);

export default router;