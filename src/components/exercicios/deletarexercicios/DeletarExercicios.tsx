import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Exercicios from "../../../models/Exercicios";
import { buscar, deletar } from "../../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarExercicios() {
  const navigate = useNavigate();

  const [exercicios, setExercicios] = useState<Exercicios>({} as Exercicios);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/exercicios/${id}`, setExercicios);
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Erro ao buscar a Exercicios.");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarExercicios() {
    setIsLoading(true);

    try {
      await deletar(`/exercicios/${id}`);

      alert("Exercicios apagado com sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("Erro ao deletar o Exercicios.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/exercicios");
  }

  return (
    <div className="container w-1/3 mx-auto ">
      <h1 className="text-4xl text-center my-4">Deletar Exercicios</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o Exercicios a seguir?
      </p>
      <div className="border mt-11 flex flex-col rounded-2xl overflow-hidden justify-between shadow-xl shadow-black-500">
        <header className="py-2 px-6 bg-emerald-500 text-white font-bold text-2xl">
          <p className="p-4 text-3xl h-full">{exercicios.nome}</p>
        </header>
        <p className="p-8 text-2xl h-full">{exercicios.descricao}</p>
        <div className="flex border-2 border-t-teal-600">
          <button
            className="text-black hover:bg-red-500 w-full py-2 flex items-center justify-center"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-black-100 
                                   hover:bg-emerald-500 flex items-center justify-center py-2"
            onClick={deletarExercicios}
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
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarExercicios;
