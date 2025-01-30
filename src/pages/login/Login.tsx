import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario && usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <img className="fundoLogin"></img>
      <div className="backdrop-invert backdrop-opacity-10 bg-slate-900 border border-slate-400 rounded-md p-10 shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-60 relative">
        <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={login}>
          <div className="relative my-4">
            <input
              type="text"
              value={usuarioLogin.email}
              onChange={atualizarEstado}
              id="email"
              name="email"
              placeholder=" "
              className="loginInput peer"
            />
            <label htmlFor="email" className="loginLabel">
              Usuário
            </label>
          </div>
          <div className="relative my-4">
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder=" "
              value={usuarioLogin.senha}
              onChange={atualizarEstado}
              className="loginInput peer"
            />
            <label htmlFor="senha" className="loginLabel">
              Senha
            </label>
          </div>
          <button
            type="submit"
            className="w-full mb-4 text-[18px] mt-6 rounded bg-blue-500 py-2 hover:bg-blue-600 transition-colors duration-300 flex justify-center items-center"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Login</span>
            )}
          </button>
          <hr className="border-slate-800 w-full" />
          <p className="text-center">
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className="text-indigo-800 hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
