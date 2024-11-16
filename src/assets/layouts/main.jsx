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

        // Verificar o tamanho da tela imediatamente após o primeiro render
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []); // Executa uma vez após o primeiro render

    return (
        <div className="flex flex-col md:flex-row h-screen overflow-hidden">
            {isMobile && <Navbar toggleSidebar={toggleSidebar} />}
            
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            
            <div
                className={`flex-1 flex flex-col p-2 z-10 ${
                    isMobile ? "mt-0" : "md:ml-[17%]"
                } overflow-hidden`}
            >
                {children}
            </div>
        </div>
    );
}

export default MainLayout;
