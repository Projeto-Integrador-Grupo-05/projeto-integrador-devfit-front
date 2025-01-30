import  { useState } from 'react';

import './App.css';

// Importando o componente Sobre
import Sobre from './pages/Sobre'; // Caminho para o arquivo Sobre.tsx

function App() {
  const [count, setCount] = useState(0);

  return (
    <>    

      {/* Aqui você chama o componente Sobre */}
      <Sobre />
    </>
  );
}

export default App;
