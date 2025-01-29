import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Exercicios from "../../models/Exercicios";
import { atualizar, buscar, cadastrar } from "../../services/Service";

function FormExercicios() {
  const navigate = useNavigate();

  const [exercicios, setExercicios] = useState<Exercicios>({} as Exercicios);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/exercicios/${id}`, setExercicios);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        console.error("Erro ao buscar Exercicioss:", error);
      }
    }
  }

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

  async function gerarNovoTema(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/exercicios`, exercicios, setExercicios);
        alert("O Exercicios foi atualizado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("Erro ao atualizar o Exercicios.");
        }
      }
    } else {
      try {
        await cadastrar(`/Exercicios`, exercicios, setExercicios);
        alert("O Exercicios foi cadastrado com sucesso!");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          alert("Erro ao cadastrar o Exercicios.");
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

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoTema}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome da Exercicios</label>
          <input
            type="text"
            placeholder="Nome da Exercicios"
            name="nome"
            className="border-2 border-slate-700 rounded p-2"
            value={exercicios.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Exercicios</label>
          <input
            type="text"
            placeholder="Descreva aqui seu Exercicios"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={exercicios.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-emerald-500 
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
