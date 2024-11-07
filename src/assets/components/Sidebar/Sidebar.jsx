import React from "react";

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <>
            {/* Fundo escuro para sobreposição */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'} md:hidden`}
                onClick={toggleSidebar}
            ></div>

            {/* Menu lateral */}
            <div
                className={`fixed top-0 left-0 z-50 bg-gray-50 p-4 shadow-md h-full w-full md:w-4/12 lg:w-3/12 xl:w-2/12 transition-transform transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0`}
            >
                <button className="md:hidden p-2 text-right" onClick={toggleSidebar}>
                    ✖️
                </button>
                <h2 className="text-lg font-semibold">Menu</h2>
                <ul className="mt-4 space-y-2">
                    <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">General details</li>
                    <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">Address</li>
                    <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">Date and time</li>
                    <li className="p-2 rounded hover:bg-gray-100 cursor-pointer">Price and payment</li>
                </ul>
            </div>
        </>
    );
}

export default Sidebar;
