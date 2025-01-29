import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
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
          <img src="/logo.png" alt="Logo" className="w-32 mb-4" />
          <h3 className="font-bold uppercase">Contato</h3>
          <p className="mt-2">grupo05.gen@gmail.com</p>
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