import { Link } from "react-router-dom";
import Treino from "../../../models/Treino";

interface CardPostagensProps {
  treino: Treino;
}

function CardTreino({ treino }: CardPostagensProps) {
  return (
    <div
      className="border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between"
    >
      <div>
        <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
          <h3 className="text-lg font-bold text-center uppercase">
            {treino.nomeTreino}
          </h3>
        </div>
        <div className="p-4 ">
          {/* <h4 className="text-lg font-semibold uppercase">{treino.usuarios}</h4> */}
          <p>{treino.descricao}</p>
          <p>Exercicio: {treino.exercicios?.descricao}</p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editartreino/${treino.id}`}
          className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
    flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletartreino/${treino.id}`}
          className="text-white bg-red-400 
	hover:bg-red-700 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTreino;
