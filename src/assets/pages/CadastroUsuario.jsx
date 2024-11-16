import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Certifique-se de importar o useNavigate
import AlertError from "../components/Alert/AlertError";
import AlertSuccess from "../components/Alert/AlertSuccess";
import axiosInstance from "../services/api";

function validateToken(token) {
    return !!token; // Verifica se o token é válido
}

function CadastroUsuario() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [alertError, setAlertError] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook para navegação

    // Verificação do token ao carregar a página
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && validateToken(token)) {
            navigate('/home'); // Se houver um token válido, redireciona para a home
        }
    }, [navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/users', {
                nome_completo: nome,
                email: email,
                senha: senha
            });

            setSuccessMessage('Cadastro concluído com sucesso! Agora, faça login para começar a explorar!');
            setAlertSuccess(true);
            setAlertError(false);

            // Limpa os campos após o cadastro
            setNome("");
            setEmail("");
            setSenha("");
        } catch (error) {
            console.log("Erro ao cadastrar o usuário: ", error);

            // Exibe a mensagem de erro
            setError(error.response?.data?.msg || "Erro ao cadastrar o usuário.");
            setAlertError(true);
            setAlertSuccess(false);
        }
    };

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#DEE0E0]">
            <form className="bg-white rounded-xl p-6 md:p-10 flex flex-col justify-center items-center max-w-md w-full shadow-xl m-5" onSubmit={handleSubmit}>
                <h1 className="font-bold text-green-600 text-2xl mb-5">RecicleJá</h1>

                {alertSuccess && <AlertSuccess className="w-full" message={successMessage} />}
                {alertError && <AlertError className="w-full" message={error} />}

                <div className="mb-5 w-full">
                    <label htmlFor="name" className="block mb-2 text-sm">Nome Completo</label>
                    <input
                        type="text"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-5 w-full">
                    <label htmlFor="email" className="block mb-2 text-sm">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-5 w-full">
                    <label htmlFor="password" className="block mb-2 text-sm">Senha</label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                </div>
                <button
                    type="submit"
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
    );
}

export default CadastroUsuario;
