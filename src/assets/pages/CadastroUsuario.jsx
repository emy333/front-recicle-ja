import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../services/api";

function CadastroUsuario() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/users', {
                nome_completo: nome,
                email: email,
                senha: senha
            })
            console.log(response);
            setNome("");
            setEmail("");
            setSenha("");
        }
        catch (error) {
            console.log("Erro ao cadastrar o usuário: ", error);
        }
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#DEE0E0]">
            <form className="bg-white rounded-xl p-6 md:p-10 flex flex-col justify-center items-center max-w-md w-full shadow-xl m-5" onSubmit={handleSubmit}>
                <h1 className="font-bold text-green-600 text-2xl mb-5">RecicleJá</h1>
                <div class="mb-5 w-full">
                    <label for="name" class="block mb-2 text-sm ">Nome Completo</label>
                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div class="mb-5 w-full">
                    <label for="email" class="block mb-2 text-sm ">E-mail</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <div class="mb-5 w-full">
                    <label for="password" class="block mb-2 text-sm ">Senha</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required />
                </div>
                <button
                    type="subimit"
                    className="focus:outline-none text-white bg-green-600 rounded-lg text-[15px] font-bold px-5 py-2.5 w-full mt-5"
                >
                    Cadastrar
                </button>

                <div className="mt-5">
                    <span>Já possui cadastro?</span>
                    <Link to={"/login"} className="mt-3 font-medium text-[#17A697] cursor-pointer"> Realizar Login</Link>
                </div>

            </form>
        </div>
    )
}

export default CadastroUsuario;