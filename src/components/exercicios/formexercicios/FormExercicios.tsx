import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import Exercicios from "../../../models/Exercicios";

function FormExercicios() {
  const navigate = useNavigate();

  const [exercicios, setExercicios] = useState<Exercicios>({} as Exercicios);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/exercicios/${id}`, setExercicios, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setExercicios({
      ...exercicios,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/exercicios");
  }

  async function gerarNovoExercicios(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/exercicios`, exercicios, setExercicios, {
          headers: { Authorization: token },
        });
        alert("O Exercicios foi atualizado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          alert("Erro ao atualizar o exercicios.");
        }
      }
    } else {
      try {
        await cadastrar(`/exercicios`, exercicios, setExercicios, {
          headers: { Authorization: token },
        });
        alert("O Exercicios foi cadastrado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          alert("Erro ao cadastrar o exercicios.");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Exercicios" : "Editar Exercicios"}
      </h1>

      <form
        className="w-1/2 flex flex-col gap-4"
        onSubmit={gerarNovoExercicios}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Exercicios</label>
          <input
            type="text"
            placeholder="Descreva aqui seu exercicios"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={exercicios.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
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
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormExercicios;
