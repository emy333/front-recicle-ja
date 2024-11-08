import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${isOpen ? 'block' : 'hidden'} md:hidden`}
                onClick={toggleSidebar}
            ></div>

            <div
                className={`fixed top-0 left-0 z-50 bg-green-600 p-4 shadow-md h-full w-screen transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:w-2/12 lg:w-2/12 xl:w-2/12`}
            >

                <div className="flex justify-between items-center">
                    <h2 className="lg:text-[25px] sm:text-[30px] md:text-[30px] text-[25px] font-semibold text-white">RecicleJá</h2>
                    <button
                        className="p-2 text-right md:hidden text-white text-[30px]"
                        onClick={toggleSidebar}
                    >
                        <IoCloseOutline />
                    </button>
                </div>

                <ul className="mt-4 space-y-2">

                    <Link to='/home' ><li className="p-2 rounded hover:bg-gray-100  hover:text-slate-950 cursor-pointer text-gray-100 ">Início</li></Link>
                    <Link to='/perfil' ><li className="p-2 rounded hover:bg-gray-100  hover:text-slate-950  cursor-pointer text-gray-100">Perfil</li></Link>
                    <li className="p-2 rounded hover:bg-gray-100  hover:text-slate-950  cursor-pointer text-gray-100">Sair</li>

                </ul>
            </div>
        </>
    );
}

export default Sidebar;
