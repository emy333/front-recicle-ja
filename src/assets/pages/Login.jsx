import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertError from "../components/Alert/AlertError";
import axiosInstance from "../services/api";

function validateToken(token) {
  return !!token;
}

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [alertError, setAlertError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && validateToken(token)) {
      navigate('/home');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance.post('/auth', {
        email,
        senha,
      });

      localStorage.setItem('token', response.data.token);

      navigate('/home');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Erro inesperado, tente novamente mais tarde.';
      setError(errorMessage);
      setAlertError(true);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#DEE0E0]">
      <form
        className="bg-white rounded-xl p-6 md:p-10 flex flex-col justify-center items-center max-w-md w-full shadow-xl m-5"
        onSubmit={handleLogin}
      >
        <h1 className="font-bold text-green-600 text-2xl mb-2">RecicleJá</h1>
        {alertError && <AlertError className="w-full" message={error} />}

        <input
          type="email"
          className="flex flex-row m-2 w-full px-2 py-2 shadow-sm border-2 border-[#DEE0E0] rounded-lg"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="flex flex-row m-2 w-full px-2 py-2 border-2 border-[#DEE0E0] rounded-lg"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button
          type="submit"
          className="focus:outline-none text-white bg-green-600 rounded-lg text-[15px] font-bold px-5 py-2.5 w-full mt-5"
          disabled={loading}
        >
          {loading ? '... Entrando' : 'Entrar'}
        </button>

        <Link to={'/cadastro'} className="mt-3 font-medium text-[#17A697] cursor-pointer">
          Fazer Cadastro
        </Link>
      </form>
    </div>
  );
}

export default Login;
