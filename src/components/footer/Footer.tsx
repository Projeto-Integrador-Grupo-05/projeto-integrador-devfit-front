import { Link, useNavigate } from "react-router-dom";
import { FacebookLogo, InstagramLogo, TiktokLogo, LinkedinLogo} from "@phosphor-icons/react";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Footer = () => {

  const navigate = useNavigate();
    const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (

    <footer className="bg-black text-white py-6 mt-auto">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        
        {/* Navegação */}
        <div>
          <h3 className="font-bold text-lg mb-2">NAVEGUE</h3>
          <ul className="space-y-1">
            <li><a href="perfil" className="hover:text-yellow-500">Área do Cliente</a></li>
            <li><a href="" className="hover:text-yellow-500">Grade de Exercicios</a></li>
            <li><a href="#" className="hover:text-yellow-500">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-yellow-500">Treinos</a></li>
          </ul>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-3 rounded-lg">
            <Link to="#"><img src="https://i.imgur.com/RhVXHKF.png" alt="Logo DevFit" className="w-14 h-14" /></Link>
          </div>
        </div>

        
        <div className="text-center md:text-right">
          <h3 className="font-bold text-lg mb-2">CONTATOS</h3>
          <p className="flex items-center justify-center md:justify-end gap-2">
          </p>

          <div className="flex justify-center md:justify-end gap-4 mt-2 text-xl">
            <Link to="#" className="hover:text-yellow-500 w-5"><img src="https://i.imgur.com/4X29XBr.png" 
                alt="Envelope"></img></Link>
            <Link to="#" className="hover:text-yellow-500"><FacebookLogo/></Link>
            <Link to="#" className="hover:text-yellow-500"><InstagramLogo /></Link>
          </div>
          <div className="flex justify-center md:justify-end gap-4 mt-2 text-xl">
            <Link to="#" className="hover:text-yellow-500"><TiktokLogo /></Link>
            <Link to="#" className="hover:text-yellow-500"><LinkedinLogo/></Link>
          </div>
        </div>

      </div>

      {/* Rodapé */}
      <div className="text-center text-sm border-t border-gray-700 mt-6 pt-4">
        2025 © Todos os Direitos Reservados | <a href="#" className="hover:text-yellow-500">Política de Privacidade</a>
      </div>
    </footer>
  );

  }return<>{component}</>
}

export default Footer;