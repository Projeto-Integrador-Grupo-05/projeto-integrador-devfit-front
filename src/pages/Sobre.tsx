import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react"; // Importação do QRCode

// Definindo o tipo para o colaborador
interface Colaborador {
  nome: string;
  foto: string;
  cargo: string;
  bio: string;
  qrcodeData: string;
}

// Configuração do carrossel
const settings = {
  dots: true, // Exibe os pontos de navegação
  infinite: true, // Permite rolagem infinita
  speed: 500,
  slidesToShow: 3, // Número de itens visíveis
  slidesToScroll: 1, // Número de itens para rolar
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function Sobre() {
  const [selectedColaborador, setSelectedColaborador] = useState<Colaborador | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null); // Estado para armazenar a pergunta aberta

  // Dados dos colaboradores
  const colaboradores: Colaborador[] = [
    { nome: "Andre", foto: "/Andre.png", cargo: "Líder de Front-End", bio: "Apaixonado por JavaScript, trabalho na DEVFIT desde 2018 e...", qrcodeData: "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front" },
    { nome: "Emerson", foto: "/Emerson.png", cargo: "Líder de Back-End", bio: "Apaixonado por JavaScript, trabalho na DEVFIT desde 2018 e...", qrcodeData: "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front" },
    { nome: "Naiara", foto: "/Naiara.png", cargo: "Analista de Sistema", bio: "Apaixonado por JavaScript, trabalho na DEVFIT desde 2018 e...", qrcodeData: "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front" },
    { nome: "Nayara", foto: "/Nayara.png", cargo: "Desenvolvedora Júnior", bio: "Apaixonado por JavaScript, trabalho na DEVFIT desde 2018 e...", qrcodeData: "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front" },
    { nome: "Rafael", foto: "/Rafael.png", cargo: "Líder de Mobile", bio: "Apaixonado por JavaScript, trabalho na DEVFIT desde 2018 e...", qrcodeData: "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front" },
    { nome: "Thayna", foto: "/Thayna.png", cargo: "Desenvolvedora Plena", bio: "Apaixonado por JavaScript, trabalho na DEVFIT desde 2018 e...", qrcodeData: "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front" },
    { nome: "Vinicius", foto: "/Vinicius.png", cargo: "Analista de Sistemas", bio: "Apaixonado por JavaScript, trabalho na DEVFIT desde 2018 e...", qrcodeData: "https://github.com/Projeto-Integrador-Grupo-05/projeto-integrador-devfit-front" },
  ];

  // Função de clique para selecionar o colaborador
  const handleCardClick = (colaborador: Colaborador) => {
    setSelectedColaborador(colaborador);
  };

  // Função para alternar a visibilidade das respostas da FAQ
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div id="forca">
      {/* Seção do banner com a imagem "força" */}
      <section className="força">
        <img src="/força.png" alt="Força" className="força-img" />
      </section>

      {/* Seção de Missão */}
      <section className="missao">
        <h1 className="titulo1">
          Nossa missão é melhorar a saúde de nossos colaboradores
        </h1>
      </section>

      {/* Seção de Fotos da Academia */}
      <section className="py-12">
        <div className="academia grid grid-cols-3 gap-6">
          <img src="/again.png" alt="Again" />
          <img src="/mulher.png" alt="Mulher" />
          <img src="/disciplina.png" alt="Disciplina" />
          <img src="/love.png" alt="Love" />
          <img src="/consistencia.png" alt="Consistencia" />
          <img src="/foco.png" alt="Foco" />
        </div>
      </section>
      <br /><br />

      {/* Seção Sobre Nós */}
      <section className="sobre">
        <h2 className="sobredev">Sobre a DEVfit</h2>
        <p className="text-lg text-gray-700 mx-auto max-w-2xl">
          A DEVFIT nasceu com a ideia de incentivar desenvolvedores a buscar um ambiente confortável e saudável, longe das longas horas sentadas em frente aos computadores. Sabemos que a vida de um desenvolvedor envolve desafios constantes, como o sedentarismo, dores nas costas e o cansaço mental, causados pelas longas jornadas de trabalho. Por isso, nosso objetivo é criar um espaço que promova o bem-estar físico e psicológico, equilibrando as demandas do desenvolvimento de software com o cuidado com a saúde. Acreditamos que um corpo saudável é essencial para manter a mente produtiva e criativa. Nossa missão é incentivar hábitos saudáveis, como a prática regular de exercícios físicos e o descanso mental, proporcionando uma rotina que valoriza tanto o aprendizado técnico quanto o autocuidado. Queremos ser um exemplo para outras empresas, mostrando que investir no bem-estar dos colaboradores é essencial para um ambiente de trabalho mais equilibrado e eficiente. Na DEVFIT, buscamos criar uma cultura de saúde integrada com a tecnologia, promovendo o bem-estar e o crescimento profissional de todos.
        </p>
        <hr />
      </section>

      {/* Seção de Perguntas Frequentes */}
      <section className="faq py-12">
        <h2 className="text-3xl font-bold text-indigo-600 mb-8 text-center">Perguntas Frequentes</h2>

        <div className="space-y-4">
          {/* Pergunta 1 */}
          <div className="border-b border-gray-300 pb-4">
            <button 
              className="w-full text-left text-xl font-semibold text-indigo-600 focus:outline-none"
              onClick={() => toggleFAQ(1)} // Alternar visibilidade da resposta
            >
              Onde fica as unidades da Devfit?
            </button>
            {openFAQ === 1 && (
              <div className="text-gray-700 mt-2">
                A Devfit possui unidades em várias cidades. Você pode encontrar todas as informações sobre nossas unidades no nosso site ou entrar em contato com nossa equipe de suporte.
              </div>
            )}
          </div>
<br />
          {/* Pergunta 2 */}
          <div className="border-b border-gray-300 pb-4">
            <button 
              className="w-full text-left text-xl font-semibold text-indigo-600 focus:outline-none"
              onClick={() => toggleFAQ(2)} // Alternar visibilidade da resposta
            >
              Quais são os planos disponíveis?
            </button>
            
            {openFAQ === 2 && (
              
              <div className="text-gray-700 mt-2">
                
                Oferecemos planos mensais, trimestrais e anuais com diferentes benefícios. Para mais informações, consulte a seção de planos no nosso site.
              </div>
            )}
          </div>
<br />
          {/* Pergunta 3 */}
          <div className="border-b border-gray-300 pb-4">
            <button 
              className="w-full text-left text-xl font-semibold text-indigo-600 focus:outline-none"
              onClick={() => toggleFAQ(3)} // Alternar visibilidade da resposta
            >
              Como posso me inscrever na Devfit?
            </button>
            {openFAQ === 3 && (
              <div className="text-gray-700 mt-2">
                Você pode se inscrever diretamente no nosso site ou entrar em contato com a nossa equipe para mais detalhes sobre como se tornar um membro.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Seção dos Colaboradores */}
      <section className="py-12 text-left">
        <h2 className="titulo2">Nossos Colaboradores</h2>
        <p className="mb-6">
          Somos uma equipe de desenvolvedores apaixonados por criar soluções que promovem saúde e bem-estar. Acreditamos que um ambiente de trabalho saudável é fundamental para aumentar a produtividade e a satisfação, contribuindo para o equilíbrio físico e mental.
        </p>

        {/* Carrossel dos colaboradores */}
        <Slider {...settings}>
          {colaboradores.map((colaborador) => (
            <div key={colaborador.nome} className="flex justify-center items-center space-x-6 py-6">
              {/* Card do colaborador */}
              <div
                className="here-card relative"
                onClick={() => handleCardClick(colaborador)}  // Evento de clique
                style={{
                  border: "2px solid #e2a343",
                  padding: "16px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  marginRight: "16px",
                  marginBottom: "16px",
                  position: "relative",
                }}
              >
                <div className="img">
                  <img
                    src={colaborador.foto}
                    alt={`Foto de ${colaborador.nome}`}
                    className="w-32 h-32 rounded-full object-cover shadow-md"
                    style={{ borderRadius: "20%" }}
                  />
                </div>
                <div className="text">
                  <h4>{colaborador.cargo}</h4>
                  <p>{colaborador.bio}</p>
                </div>

                {/* Exibição do QR Code quando o colaborador for selecionado */}
                {selectedColaborador && selectedColaborador.nome === colaborador.nome && (
                  <div className="qrcode-overlay absolute inset-0 flex justify-center items-center bg-white bg-opacity-80 rounded-lg">
                    <QRCodeCanvas value={colaborador.qrcodeData} size={128} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}

export default Sobre;
