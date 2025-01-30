import { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Treino from "../../../models/Treino";
import { deletar, atualizar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

interface CardTreinoProps {
  treino: Treino;
}

function CardTreino({ treino }: CardTreinoProps) {
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const [editando, setEditando] = useState(false);
  const [treinoEditado, setTreinoEditado] = useState<Treino>({ ...treino });
  const [isLoading, setIsLoading] = useState(false);

  async function deletarTreino() {
    try {
      await deletar(`/treino/${treino.id}`, {
        headers: { Authorization: token },
      });
      alert("Treino apagado com sucesso");
      window.location.reload();
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o treino.");
      }
    }
  }

  async function salvarEdicao() {
    setIsLoading(true);
    try {
      await atualizar(`/treino`, treinoEditado, () => {}, {
        headers: { Authorization: token },
      });
      alert("Treino atualizado com sucesso");
      setEditando(false);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao atualizar o treino.");
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
              value={treinoEditado.nomeTreino}
              onChange={(e) =>
                setTreinoEditado({ ...treinoEditado, nomeTreino: e.target.value })
              }
            />
            <textarea
              className="w-full p-2 border rounded-md mb-2"
              value={treinoEditado.descricao}
              onChange={(e) =>
                setTreinoEditado({ ...treinoEditado, descricao: e.target.value })
              }
            />
            <input
              type="number"
              className="w-full p-2 border rounded-md mb-2"
              value={treinoEditado.frequenciaSemanal}
              onChange={(e) =>
                setTreinoEditado({
                  ...treinoEditado,
                  frequenciaSemanal: Number(e.target.value),
                })
              }
            />
          </>
        ) : (
          <>
            <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
              {treino.nomeTreino}
            </h5>
            <p className="text-gray-700 dark:text-gray-400">{treino.descricao}</p>
            <p className="text-sm font-semibold text-gray-800">
              Frequência Semanal: {treino.frequenciaSemanal}
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
            onClick={deletarTreino}
            className="px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardTreino;
