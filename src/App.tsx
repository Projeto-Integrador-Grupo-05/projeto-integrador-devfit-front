import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListaExercicios from "./components/exercicios/listaexercicios/ListaExercicios";
import DeletarExercicios from "./components/exercicios/deletarexercicios/DeletarExercicios";
import FormExercicios from "./components/formexercicios/FormExercicios";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/exercicios" element={<ListaExercicios />} />
          <Route path="/cadastrarexercicios" element={<FormExercicios />} />
          <Route path="/editarexercicios/:id" element={<FormExercicios />} />
          <Route
            path="/deletarexercicios/:id"
            element={<DeletarExercicios />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
