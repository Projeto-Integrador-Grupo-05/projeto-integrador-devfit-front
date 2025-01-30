import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Treino from "../../../models/Treino";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarTreino() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [treino, setTreino] = useState<Treino>({} as Treino);

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/treino/${id}`, setTreino, {
        headers: {
          Authorization: token,
        },
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
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarTreino() {
    setIsLoading(true);

    try {
      await deletar(`/treino/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Treino apagado com sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o treino.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/treino");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-96 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Deletar Treino</h1>
        <p className="text-gray-700 mb-4">
          Tem certeza de que deseja apagar o treino abaixo?
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold text-gray-800">{treino.nomeTreino}</h2>
          <p className="text-gray-600">{treino.descricao}</p>
        </div>
        <div className="flex space-x-4">
          <button
            className="w-1/2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 rounded-lg transition"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-1/2 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition flex justify-center items-center"
            onClick={deletarTreino}
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
              "Sim"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarTreino;
