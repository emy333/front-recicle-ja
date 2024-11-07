function Navbar() {
    return (
        <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
            </div>
        </nav>

    )
}

export default Navbar;