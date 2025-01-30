import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { deletar, atualizar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";
import Exercicios from "../../../models/Exercicios";

interface CardExercicioProps {
  exercicio: Exercicios;
}

function CardExercicio({ exercicio }: CardExercicioProps) {
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [editando, setEditando] = useState(false);
  const [exercicioEditado, setExercicioEditado] = useState<Exercicios>({ ...exercicio });
  const [isLoading, setIsLoading] = useState(false);

  async function deletarExercicio() {
    try {
      await deletar(`/exercicio/${exercicio.id}`, {
        headers: { Authorization: token },
      });
      alert("Exercicio apagado com sucesso");
      window.location.reload();
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o exercicio.");
      }
    }
  }

  async function salvarEdicao() {
    setIsLoading(true);
    try {
      await atualizar(`/exercicio`, exercicioEditado, () => {}, {
        headers: { Authorization: token },
      });
      alert("Exercicio atualizado com sucesso");
      setEditando(false);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao atualizar o exercicio.");
      }
    }
    setIsLoading(false);
      window.location.reload();
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 p-4">

      <div className="p-4">
        {editando ? (
          <>
            <input
              type="text"
              className="w-full p-2 border rounded-md mb-2"
              value={exercicioEditado.nome}
              onChange={(e) =>
                setExercicioEditado({ ...exercicioEditado, nome: e.target.value })
              }
            />
            <textarea
              className="w-full p-2 border rounded-md mb-2"
              value={exercicioEditado.descricao}
              onChange={(e) =>
                setExercicioEditado({ ...exercicioEditado, descricao: e.target.value })
              }
            />
            <input
              type="string"
              className="w-full p-2 border rounded-md mb-2"
              value={exercicioEditado.grupoMuscular}
              onChange={(e) =>
                setExercicioEditado({
                  ...exercicioEditado,
                  grupoMuscular: String(e.target.value),
                })
              }
            />
          </>
        ) : (
          <>
            <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
              {exercicio.nome}
            </h5>
            <p className="dark:text-gray-400"> <strong>Descrição: </strong> {exercicio.descricao}</p>
            <p className="text-sm dark:text-gray-400">
              <strong>Grupo Muscular: </strong>{exercicio.grupoMuscular}
            </p>
          </>
        )}

        <div className="flex mt-4 space-x-4">
          {editando ? (
            <button
              onClick={salvarEdicao}
              className="px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              {isLoading ? (
                <RotatingLines strokeColor="white" strokeWidth="5" width="24" />
              ) : (
                "Salvar"
              )}
            </button>
          ) : (
            <button
              onClick={() => setEditando(true)}
              className="px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
            >
              Editar
            </button>
          )}

          <button
            onClick={deletarExercicio}
            className="px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardExercicio;
