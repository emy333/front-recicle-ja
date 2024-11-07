import React, {useState, useEffect} from "react";
import Sidebar from "../components/Sidebar/main";

function MainLayout({children}){
    return(
        <>
            <div>
                <div>
                    <Sidebar/>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default MainLayout;