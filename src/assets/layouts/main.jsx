import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/main";
import Sidebar from "../components/Sidebar/Sidebar";

function MainLayout({ children }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen">
            {isMobile && <Navbar toggleSidebar={toggleSidebar} />}
            
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            
            <div
                className={`flex-1 p-2 md:mt-0 z-10 ${
                    isMobile ? "mt-0" : "md:ml-[17%]"
                }`}
            >
                {children}
            </div>
        </div>
    );
}

export default MainLayout;
