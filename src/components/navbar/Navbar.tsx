import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar (){
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
        <header id="header" className="w-full top-0 left-0 transition-all duration-500 bg-black py-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/home" className="text-white text-2xl">
                <img src="https://i.imgur.com/RhVXHKF.png" alt="Logo DevFit"></img>
              </Link>
    
              <nav>
                <ul className="flex space-x-12">
                  <li><Link to="/listaexercicios" className="text-white hover:text-yellow-500 ">EXERCÍCIOS</Link></li>
                  <li><Link to="/treino" className="text-white hover:text-yellow-500">TREINOS</Link></li>
                  <li><Link to="/perfil" className="text-white hover:text-yellow-500">ÁREA DO ALUNO</Link></li>
                </ul>
              </nav>
    
              <div>
                <Link to="/cadastro">
                  <button className="w-32 h-10 bg-orange-400 hover:bg-orange-600 text-white font-bold rounded transition-all duration-200">
                    MATRICULE-SE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>
      );
    } return<>{component}</>
  }
export default Navbar;