import { Link } from "react-router-dom"

function Navbar (){

    return (
        <header id="header" className="w-full top-0 left-0 transition-all duration-500 bg-black py-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/#" className="text-white text-2xl">
                <i></i>
              </Link>
    
              <nav>
                <ul className="flex space-x-12">
                  <li><Link to="/#" className="text-white hover:text-yellow-500 ">EXERCÍCIOS</Link></li>
                  <li><Link to="/#" className="text-white hover:text-yellow-500">TREINOS</Link></li>
                  <li><Link to="/#" className="text-white hover:text-yellow-500">ÁREA DO ALUNO</Link></li>
                </ul>
              </nav>
    
              <div>
                <Link to="/#">
                  <button className="w-32 h-10 bg-orange-400 hover:bg-orange-600 text-white font-bold rounded transition-all duration-200">
                    MATRICULE-SE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>
      );
    };
export default Navbar