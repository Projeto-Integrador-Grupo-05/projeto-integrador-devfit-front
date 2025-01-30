import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Exercicios from "../../../models/Exercicios";
import CardExercicios from "../cardexercicios/CardExercicios";
import { buscar } from "../../../services/Service";

function ListaExercicioss() {
  const navigate = useNavigate();

  const [exercicios, setExercicioss] = useState<Exercicios[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarExercicios() {
    try {
      await buscar("/exercicios", setExercicioss, {
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
    buscarExercicios();
  }, [exercicios.length]);

  return (
    <>
      {exercicios.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercicios.map((exercicio) => (
              <CardExercicios key={exercicio.id} exercicios={exercicio} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaExercicioss;
