import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

function Perfil() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token]);

  const calcularIMC = (peso: any, altura: any) => {
    return (peso / (altura * altura)).toFixed(2);
  };

  const classificarIMC = (imc: number) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    if (imc >= 30 && imc < 34.9) return "Obesidade grau 1";
    if (imc >= 35 && imc < 39.9) return "Obesidade grau 2";
    return "Obesidade grau 3";
  };

  const classificarCorIMC = (imc: number) => {
    if (imc < 18.5) return "yellow-400";
    if (imc >= 18.5 && imc < 24.9) return "green-500";
    if (imc >= 25 && imc < 29.9) return "orange-400";
    if (imc >= 30 && imc < 34.9) return "red-600";
    if (imc >= 35 && imc < 39.9) return "rose-950";
    return "black";
  };

  const imc = calcularIMC(usuario.peso, usuario.altura);
  const classificacaoIMC = classificarIMC(parseFloat(imc));
  const classificacaoCorIMC = classificarCorIMC(parseFloat(imc));

  return (
    <>
      <div className="bg-orange-400 text-gray-100 py-16">
        <img></img>
        <div className="container mx-auto text-center ">
          <h1 className="text-5xl font-bold mb-4">Área do Aluno</h1>
          <p className="text-xl mb-8">Mais informações sobre você</p>
        </div>
      </div>
      <div className="flex flex-row justify-center h-[80vh] items-center gap-16 py-[5vh] px-[6vw] bg-gray-100 ">
        {/*perfil*/}
        <div className=" rounded-xl border-2 border-orange-600 p-10 bg-white shadow-2xl basis-5/12 ">
          <div className="flex flex-col gap-3 items-center">
            <img
              width="200vh"
              className="rounded-full border-[5px] border-orange-400"
              src="https://i.pinimg.com/736x/1e/f8/15/1ef8156889dba99417ff2b3a6d99988d.jpg"
              alt=""
            />
            <p className="text-2xl">
              <b>{usuario.nome}</b>
            </p>
            <p className="text-xl">{usuario.email}</p>
            <div className="flex flex-row gap-5 justify-around">
              <p className="text-xl">
                <b>Nível</b>
                <br />
                {usuario.nivelFitness}
              </p>
              <p className="text-xl">
                <b>Objetivo</b>
                <br />
                {usuario.objetivo}
              </p>
            </div>
          </div>
        </div>

        {/*IMC */}
        <div className=" rounded-xl border-2 border-orange-600 p-10 bg-white shadow-2xl basis-7/12 ">
          <div className="flex flex-col gap-3 items-center">
          <div className={`border-4 border-${classificacaoCorIMC} rounded-full p-3 w-52 h-52 flex items-center justify-center flex-col`}>
          <h3 className="text-2xl">
                <b>IMC</b>
              </h3>
              <p className="text-xl">{imc}</p>
            </div>
            <p className="text-2xl">
              <b>{classificacaoIMC}</b>
            </p>
            <div className="flex flex-row gap-5 justify-around">
              <p className="text-xl">
                <b>Altura</b>
                <br />
                {usuario.altura}
              </p>
              <p className="text-xl">
                <b>Peso</b>
                <br />
                {usuario.peso}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Perfil;
