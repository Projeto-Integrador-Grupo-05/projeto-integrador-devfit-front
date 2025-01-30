import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Treino from "../../../models/Treino";
import Exercicios from "../../../models/Exercicios";
import { buscar, atualizar, cadastrar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function FormTreino() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [exercicio, setExercicio] = useState<Exercicios[]>([]);

  const [exercicios, setExercicios] = useState<Exercicios>({
    id: 0,
    descricao: "",
    nome: "",
    grupoMuscular: "",
    nivelDificuldade: "",
    tempoEstimado: 0,
  });
  const [treino, setTreino] = useState<Treino>({} as Treino);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTreinoPorId(id: string) {
    try {
      await buscar(`/treino/${id}`, setTreino, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  async function buscarExerciciosPorId(id: string) {
    try {
      await buscar(`/exercicios/${id}`, setExercicio, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  async function buscarExercicios() {
    try {
      await buscar("/exercicios", setExercicios, {
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
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    buscarExercicios();

    if (id !== undefined) {
      buscarTreinoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setTreino({
      ...treino,
      exercicios: exercicios,
    });
  }, [exercicios]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTreino({
      ...treino,
      [e.target.name]: e.target.value,
      exercicios: exercicios,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate("/treino");
  }

  async function gerarNovaTreino(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/treino`, treino, setTreino, {
          headers: {
            Authorization: token,
          },
        });

        alert("Treino atualizada com sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          alert("Erro ao atualizar a Treino");
        }
      }
    } else {
      try {
        await cadastrar(`/treino`, treino, setTreino, {
          headers: {
            Authorization: token,
          },
        });

        alert("Treino cadastrada com sucesso");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          alert("Erro ao cadastrar a Treino");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoExercicios = exercicios.descricao === "";

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Treino" : "Cadastrar Treino"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovaTreino}>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Título da Treino</label>
          <input
            type="text"
            placeholder="Titulo"
            name="titulo"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={treino.nomeTreino}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Texto da Treino</label>
          <input
            type="text"
            placeholder="Texto"
            name="texto"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={treino.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Exercicios da Treino</p>
          <select
            name="Exercicios"
            id="Exercicios"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarExerciciosPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione um Exercicios
            </option>

            {exercicio.map((exercicios) => (
              <>
                <option value={exercicios.id}>{exercicios.descricao}</option>
              </>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={carregandoExercicios}
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
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormTreino;
