import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#DEE0E0]">
            <form className="bg-white rounded-xl p-6 md:p-10 flex flex-col justify-center items-center max-w-md w-full shadow-xl m-5">
                <h1 className="font-bold text-green-600 text-2xl mb-2">RecicleJá</h1>
                <input
                    type="email"
                    className="flex flex-row m-2 w-full px-2 py-2 shadow-sm border-2 border-[#DEE0E0] rounded-lg"
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    className="flex flex-row m-2 w-full px-2 py-2 border-2 border-[#DEE0E0] rounded-lg"
                    placeholder="Senha"
                    required
                />
                <button
                    type="subimit"
                    className="focus:outline-none text-white bg-green-600 rounded-lg text-[15px] font-bold px-5 py-2.5 w-full mt-5"

                >
                    Entrar
                </button>

                <Link to={'/cadastro'} className="mt-3 font-medium text-[#17A697] cursor-pointer">Fazer Cadastro</Link>

            </form>
        </div>
    );
}

export default Login;
