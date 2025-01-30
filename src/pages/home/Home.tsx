import ListaTreino from "../../components/treino/listatreino/ListaTreino";
import ModalTreino from "../../components/treino/modaltreino/ModalTreino";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-400 from-10% via-purple-600 via-30% to-purple-800 to-60% flex ">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vindo!</h2>
            <p className="text-xl">Expresse aqui seus pensamentos e opniões</p>

            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalTreino />
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>

      <ListaTreino />
    </>
  );
}

export default Home;
