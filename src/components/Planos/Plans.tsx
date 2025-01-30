import { Link } from "react-router-dom";

const Planos = () => {
    return (
      <div className="p-8 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Plano Premium */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 
          hover:shadow-2xl hover:border-2 hover:border-orange-600">
            <h2 className="text-2xl font-bold text-gray-800">Plano Premium</h2>
            <p className="text-gray-600 mt-2">Treine em qualquer DevFit seja no Brasil!</p>
            <div className="mt-4">
              <p className="text-gray-700">A PARTIR DE</p>
              <p className="text-3xl font-bold text-gray-900">R$ 49,90</p>
              <p className="text-gray-600">no 1º mês, depois R$ 149,90/mês</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">12 meses de fidelidade</p>
            </div>
            <div className="mt-6">
            <Link to="/cadastro"><button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-600">Contratar agora</button></Link>
            </div>
            <ul className="mt-6 text-gray-600">
              <li>• Acesso ilimitado a +1.700 academias</li>
              <li>• Leve 5 amigos por mês para treinar com você</li>
              <li>• Cadeira de massagem</li>
              <li>• Smart Fit GO (treinos online) no app</li>
              <li>• Área de musculação e aeróbicos</li>
              <li>• Smart Fit App</li>
            </ul>
          </div>
        
        {/* Plano Smart */}
        <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 
          hover:shadow-2xl hover:border-2 hover:border-orange-600">
            <h2 className="text-2xl font-bold text-gray-800">Plano Smart</h2>
            <p className="text-gray-600 mt-2">Nosso plano mensal para você que não quer se comprometer!</p>
            <div className="mt-4">
              <p className="text-gray-700">A PARTIR DE</p>
              <p className="text-3xl font-bold text-gray-900">R$ 39,90</p>
              <p className="text-gray-600">no 1º mês, depois R$ 119,90/mês</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">Sem fidelidade</p>
            </div>
            <div className="mt-6">
            <Link to="/cadastro"><button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-600">Contratar agora</button></Link>
            </div>
            <ul className="mt-6 text-gray-600">
              <li>• Acesso ilimitado a +1.700 academias</li>
              <li>• Leve 5 amigos por mês para treinar com você</li>
              <li>• Cadeira de massagem</li>
              <li>• Smart Fit GO (treinos online) no app</li>
              <li>• Área de musculação e aeróbicos</li>
              <li>• Smart Fit App</li>
            </ul>
          </div>

          {/* Plano Básico */}
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 
          hover:shadow-2xl hover:border-2 hover:border-orange-600">
            <h2 className="text-2xl font-bold text-gray-800">Plano Básico</h2>
            <p className="text-gray-600 mt-2">Nosso plano mais econômico!</p>
            <div className="mt-4">
              <p className="text-gray-700">A PARTIR DE</p>
              <p className="text-3xl font-bold text-gray-900">R$ 29,90</p>
              <p className="text-gray-600">no 1º mês, depois R$ 99,90/mês</p>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">12 meses de fidelidade</p>
            </div>
            <div className="mt-6">
              <Link to="/cadastro"><button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-600">Contratar agora</button></Link>
            </div>
            <ul className="mt-6 text-gray-600">
              <li>• Acesso ilimitado a +1.700 academias</li>
              <li>• Leve 5 amigos por mês para treinar com você</li>
              <li>• Cadeira de massagem</li>
              <li>• Smart Fit GO (treinos online) no app</li>
              <li>• Área de musculação e aeróbicos</li>
              <li>• Smart Fit App</li>
            </ul>
          </div>
  
          
        </div>
      </div>
    );
  };
  
  export default Planos;
  