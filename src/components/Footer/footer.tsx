import { Link } from "react-router-dom";
import { FacebookLogo, InstagramLogo, TiktokLogo, LinkedinLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4yarn text-center p-4 mt-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
            <nav>
                <h3 className="font-bold uppercase">Navegue</h3>
                    <Link to='/perfil' className="hover:underline">Área do cliente</Link>
                    <Link to='/treinos' className="hover:underline">Grade de aulas</Link>
                    <Link to='/sobre' className="hover:underline">Sobre Nós</Link>
                    <Link to='/exercicios' className="hover:underline">Modalidades</Link>
            </nav>
        </div>
        
        
        <div className="flex flex-col items-center">
          <img src="https://i.imgur.com/RhVXHKF.png" alt="Logo" className="w-36 mb-5" />
          <h2 className="font-bold uppercase">Contato</h2>
          <Link to =""><img src="https://i.imgur.com/FPir2GW.png" alt="Envelope"></img>grupo05.gen@gmail.com</Link>
          <Link to =""><FacebookLogo size={30}/></Link>

        </div>
        
        
        <div className="text-center md:text-right">
          <h3 className="font-bold uppercase">DevFit</h3>
          <div className="flex justify-center md:justify-end mt-4 space-x-4">
          </div>
        </div>
      </div>
      
      
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>2025 © Todos os Direitos Reservados | Política de Privacidade</p>
      </div>
    </footer>
  );
};

export default Footer;