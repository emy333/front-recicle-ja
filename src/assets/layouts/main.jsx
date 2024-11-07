import React, { useState, useEffect } from "react";
import SidebarDesktop from "../components/Sidebar/SidebarDesktop";
import SidebarMobile from "../components/Sidebar/SidebarMobile";
import Navbar from "../components/Navbar/main";

function MainLayout({ children }) {
    return (
        <div className="flex flex-col md:flex-row">
            <Navbar />
            <div className="flex-1 p-4 md:ml-[5]">
                {children}
            </div>
        </div>
    );
}




export default MainLayout;