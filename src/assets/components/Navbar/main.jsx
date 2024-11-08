// Navbar.js
import React from "react";
import { IoMenu } from "react-icons/io5";

function Navbar({ toggleSidebar }) {
    return (
        <nav className="flex items-center justify-between p-4 bg-green-600  text-white">
            <h1 className="text-lg font-bold">RecicleJá</h1>
            <button onClick={toggleSidebar} className="text-white">
                <IoMenu />
            </button>
        </nav>
    );
}

export default Navbar;
