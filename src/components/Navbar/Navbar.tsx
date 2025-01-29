import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function Navbar (){

    const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <header id="header" className="w-full fixed top-0 left-0 transition-all duration-500 bg-transparent py-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-white text-2xl">
                <i className="bi bi-globe-americas"></i>
              </Link>
    
              <nav>
                <ul className="flex space-x-10">
                  <li><Link to="/" className="text-white hover:text-gray-400">EXERCÍCIOS</Link></li>
                  <li><Link to="/passagens" className="text-white hover:text-gray-400">TREINOS</Link></li>
                  <li><Link to="/destinos" className="text-white hover:text-gray-400">ÁREA DO ALUNO</Link></li>
                  <li><Link to="/blog" className="text-white hover:text-gray-400">MATRICULE - SE</Link></li>
                </ul>
              </nav>
    
              <div>
                <Link to="/contato">
                  <button className="w-32 h-10 bg-orange-400 hover:bg-orange-600 text-white font-bold rounded transition-all duration-200">
                    CONTATO
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </header>
      );
    };


export default Navbar