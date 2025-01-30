import Features from "../../components/Features/Features";
import Planos from "../../components/Planos/Plans";

function Home(){
  return (

      <section className="bg-orange-400 text-gray-100 py-20">
          <img></img>
        <div className="container mx-auto text-center ">
          <h1 className="text-5xl font-bold mb-4">Bem-vindo à DevFit</h1>
          <p className="text-xl mb-8">Mais tempo para você</p>
        </div>
            <Planos/>
            <Features/>
      </section>
    );

    

};
export default Home