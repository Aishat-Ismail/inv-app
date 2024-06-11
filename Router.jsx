import { BrowserRouter, Route, Routes, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/dash/Dashboard";
import Inventory from "./pages/inventory/Inventory";
import LogOut from "./pages/LogOut";
import Manage from './pages/manage/Manage';
import Reports from "./pages/reports/Reports";
import Settings from './pages/Settings';
import Orders from "./pages/orders/Orders";
import Suppliers from "./pages/suppliers/Suppliers";
import Login from "./authentication/login/Login";
import Create from "./authentication/create/CreateAccount";
import Landing from "./components/landing/Landing";
// import Suppliers from "./pages/Suppliers";



const Router = createBrowserRouter([
        {
        path: "/",
        element: <Landing/>,
      

    },

    {
        path: "/login",
        element: <Login/>,
      

    },
    {
        path: "/signup",
        element: <Create/>,
      

    },

    {
        path: "/dashboard",
        element: <MainLayout />,
        children: [
            {
                index:true,
                element: <Dashboard />
            },

            {
                path: "/dashboard/inventory",
                element: <Inventory />
            },

            {
                path: "/dashboard/logout",
                element: <LogOut />
            },

            {
                path: "/dashboard/manage",
                element: <Manage />
            },

            {
                path: "/dashboard/orders",
                element: <Orders />
            },

            {
                path: "/dashboard/reports",
                element: <Reports />
            },

            {
                path: "/dashboard/settings",
                element: <Settings />
            },

            {
                path: "/dashboard/suppliers",
                element: <Suppliers/>
            },

            {
                path: "*",
                element: 'Page Not Found'
            }
        ]
    }


])
export default Router