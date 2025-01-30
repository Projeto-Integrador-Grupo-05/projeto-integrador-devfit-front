import ListaTreino from "../../components/treino/listatreino/ListaTreino";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-400 from-10% via-purple-600 via-30% to-purple-800 to-60% flex">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center my-8">
        <Link
          to="/formtreino"
          className="px-6 py-3 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
        >
          Criar Novo Treino
        </Link>
      </div>

      <ListaTreino />
    </>
  );
}

export default Home;

