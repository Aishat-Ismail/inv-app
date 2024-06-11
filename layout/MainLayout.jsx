import { Outlet } from "react-router-dom"
import SideNav from "../components/navigations/sideNav/SideNav"
import TopNav from "../components/navigations/topNav/TopNav"
import './MainLayout.css'
import Manage from "../pages/manage/Manage"



const MainLayout = () => {

    return (

        <>
            <div id="layout">
                <div id="side-nav">
                    <SideNav></SideNav>
                </div>



                <div id="display">

                    <div id="top-nav">
                        <TopNav></TopNav>

                    </div>
                    <div id="outlet">

                    <Outlet />
                    
                    </div>
                    
                </div>


            </div>
        </>
    )
}
export default MainLayout