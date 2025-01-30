import { Link } from "react-router-dom";
import { FacebookLogo, InstagramLogo, TiktokLogo, LinkedinLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        
        {/* Navegação */}
        <div>
          <h3 className="font-bold text-lg mb-2">NAVEGUE</h3>
          <ul className="space-y-1">
            <li><Link to="/perfil" className="hover:text-yellow-500">Área do Cliente</Link></li>
            <li><Link to="/listaexercicios" className="hover:text-yellow-500">Grade de Exercícios</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500">Sobre Nós</Link></li>
            <li><Link to="/treino" className="hover:text-yellow-500">Treinos</Link></li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-3 rounded-lg">
            <img src="https://i.imgur.com/RhVXHKF.png" alt="Logo DevFit" className="w-14 h-14" />
          </div>
        </div>

        {/* Contatos */}
        <div className="text-center md:text-right">
          <h3 className="font-bold text-lg mb-2">CONTATOS</h3>
          <div className="flex justify-center md:justify-end gap-4 mt-2 text-xl">
            <Link to="#" className="hover:text-yellow-500"><FacebookLogo/></Link>
            <Link to="#" className="hover:text-yellow-500"><InstagramLogo /></Link>
            <Link to="#" className="hover:text-yellow-500"><TiktokLogo /></Link>
            <Link to="#" className="hover:text-yellow-500"><LinkedinLogo/></Link>
          </div>
        </div>

      </div>

      {/* Rodapé */}
      <div className="text-center text-sm border-t border-gray-700 mt-6 pt-4">
        2025 © Todos os Direitos Reservados | <Link to="#" className="hover:text-yellow-500">Política de Privacidade</Link>
      </div>
    </footer>
  );
}

export default Footer;
