import { useNavigate } from "react-router-dom";
import CardTreino from "../cardtreino/CardTreino";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import Treino from "../../../models/Treino";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";

function ListaTreino() {
  const navigate = useNavigate();

  const [treinos, setTreino] = useState<Treino[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarTreino() {
    try {
      await buscar("/treino", setTreino, {
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
    buscarTreino();
  }, [treinos.length]);

  return (
    <>
      {treinos.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div
        className="container mx-auto my-4 
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {treinos.map((treino) => (
          <CardTreino key={treino.id} treino={treino} />
        ))}
      </div>
    </>
  );
}

export default ListaTreino;
