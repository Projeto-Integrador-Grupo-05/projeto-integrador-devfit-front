import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastrarUsuario } from "../../services/Service";
import "./Cadastro.css";
import { RotatingLines } from "react-loader-spinner";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    altura: 54,
    peso: 34,
    objetivo: "bagaefeaf",
    tipo: "fwfqfqf",
    nivelFitness: "fqwqfqwfwq",
  });

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="text-white h-[100vh] flex items-center justify-center bg-cover">
        <img className="fundoCadastro" />
        <div className="backdrop-invert backdrop-opacity-10 bg-slate-900 border border-slate-400 rounded-md p-10 shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-60 relative">
          <h2 className="text-4xl font-bold text-center mb-6">Cadastrar</h2>
          <form className="relative my-4" onSubmit={cadastrarNovoUsuario}>
            <div className="grid grid-cols-3 gap-4">
              <div className="relative my-4">
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder=" "
                  className="cadastroInput peer"
                  value={usuario.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                <label htmlFor="nome" className="cadastroLabel">
                  Nome
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder=" "
                  className="cadastroInput peer"
                  value={usuario.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                <label htmlFor="email" className="cadastroLabel">
                  Email
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder=" "
                  className="cadastroInput peer"
                  value={usuario.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                <label className="cadastroLabel" htmlFor="senha">
                  Senha
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  placeholder=" "
                  className="cadastroInput peer"
                  value={confirmaSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleConfirmarSenha(e)
                  }
                />
                <label htmlFor="confirmarSenha" className="cadastroLabel">
                  Confirmar Senha
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="name"
                  id="altura"
                  name="altura"
                  placeholder=" "
                  className="cadastroInput peer"
                  value={usuario.altura}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleConfirmarSenha(e)
                  }
                />
                <label htmlFor="altura" className="cadastroLabel">
                  Altura
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="number"
                  id="peso"
                  name="peso"
                  placeholder=" "
                  className="cadastroInput peer"
                  value={usuario.peso}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                <label htmlFor="peso" className="cadastroLabel">
                  Peso
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="name"
                  id="objetivo"
                  name="objetivo"
                  placeholder=" "
                  className="cadastroInput peer"
                  value={usuario.objetivo}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                <label htmlFor="objetivo" className="cadastroLabel">
                  Objetivo
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="tipo"
                  id="tipo"
                  name="tipo"
                  placeholder=" "
                  className="cadastroInput peer"
                  value={usuario.tipo}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                <label htmlFor="tipo" className="cadastroLabel">
                  Tipo
                </label>
              </div>
              <div className="relative my-4">
                <input
                  type="name"
                  id="nivelFitness"
                  name="nivelFitness"
                  placeholder=" "
                  className="cadastroInput peer"
                  value={usuario.nivelFitness}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
                <label htmlFor="nivelFitness" className="cadastroLabel">
                  Nivel Fitness
                </label>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                className="w-full mb-4 text-[18px] mt-6 rounded text-white bg-red-400 
                  hover:bg-red-700 transition-colors duration-300 flex justify-center items-center"
                onClick={retornar}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="w-full mb-4 text-[18px] mt-6 rounded bg-blue-600 py-2 hover:bg-blue-400 transition-colors duration-300 flex justify-center items-center"
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
                  <span>Cadastrar</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
