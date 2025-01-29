import { useState, useEffect } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Exercicios from "../../../models/Exercicios";
import { buscar } from "../../../services/Service";
import CardExercicios from "../cardexercicios/CardExercicios";

function ListaExercicios() {
  const navigate = useNavigate();
  const [exercicios, setExercicios] = useState<Exercicios[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchExercicios() {
      try {
        await buscar("/exercicios", setExercicios);
      } catch (error: any) {
        if (error.toString().includes("403")) {
          console.error("Erro ao buscar exercicioss:", error); // Ou outro redirecionamento apropriado
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchExercicios();
  }, [navigate]);

  return (
    <>
      {isLoading ? (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      ) : (
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exercicios.map((exercicios) => (
                <CardExercicios key={exercicios.id} exercicios={exercicios} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListaExercicios;
