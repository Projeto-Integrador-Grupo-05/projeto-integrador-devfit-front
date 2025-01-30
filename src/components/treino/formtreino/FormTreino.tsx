import { useState, useEffect, ChangeEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrar, buscar } from "../../../services/Service";
import Exercicios from "../../../models/Exercicios";
import { RotatingLines } from "react-loader-spinner";
import { AuthContext } from "../../../context/AuthContext";

function FormTreino() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [exercicios, setExercicios] = useState<Exercicios[]>([]);
  const [treino, setTreino] = useState({
    nomeTreino: "",
    frequenciaSemanal: "",
    descricao: "",
    exercicios: [] as Exercicios[],
  });

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    async function buscarExercicios() {
      try {
        await buscar("/exercicio", setExercicios, {
          headers: { Authorization: token },
        });
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        }
      }
    }

    buscarExercicios();
  }, []);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setTreino({ ...treino, [e.target.name]: e.target.value });
  }

  function selecionarExercicio(e: ChangeEvent<HTMLSelectElement>) {
    const exercicioSelecionado = exercicios.find(
      (ex) => ex.id === Number(e.target.value)
    );
    if (exercicioSelecionado) {
      setTreino({
        ...treino,
        exercicios: [...treino.exercicios, exercicioSelecionado],
      });
    }
  }

  async function gerarNovoTreino(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await cadastrar("/treino", treino, setTreino, {
        headers: {
          Authorization: token,
        },
      });

      alert("Treino cadastrado com sucesso!");
      navigate("/");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
    setIsLoading(false);
  }

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">Criar Treino</h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoTreino}>
        <div className="flex flex-col gap-2">
          <label htmlFor="titulo">Título do Treino</label>
          <input
            type="text"
            placeholder="Nome Treino"
            name="nomeTreino"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={treino.nomeTreino}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="number">Frequencia Semanal</label>
          <input
            type="number"
            placeholder="Nome Treino"
            name="frequenciaSemanal"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={treino.frequenciaSemanal}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={treino.descricao}
            onChange={atualizarEstado}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="exercicios">Selecione os Exercícios</label>
          <select
            name="exercicios"
            className="border p-2 border-slate-800 rounded"
            onChange={selecionarExercicio}
          >
            <option value="" disabled>
              Selecione um Exercício
            </option>
            {exercicios.map((exercicio) => (
              <option key={exercicio.id} value={exercicio.id}>
                {exercicio.descricao}
              </option>
            ))}
          </select>

          {treino.exercicios.length > 0 && (
            <ul className="mt-2">
              {treino.exercicios.map((ex, index) => (
                <li key={index} className="text-sm text-gray-700">
                  ✅ {ex.descricao}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex justify-between w-full">
          <button
            type="button"
            className="rounded bg-gray-400 hover:bg-gray-600 text-white font-bold px-6 py-2"
            onClick={() => navigate("/home")}
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="rounded bg-orange-500 hover:bg-orange-700 text-white font-bold px-6 py-2 flex justify-center"
            disabled={isLoading}
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
              <span>Criar Treino</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormTreino;
